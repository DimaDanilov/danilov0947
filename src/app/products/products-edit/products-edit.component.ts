import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/shared/models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-user-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css'],
})
export class ProductsEditComponent implements OnInit {
  id: number;
  user: Product;
  productForm: FormGroup;

  constructor(
    private activatedRouter: ActivatedRoute,
    private productsService: ProductsService,
    private router: Router
  ) {
    this.activatedRouter.params.subscribe((param) => {
      this.id = param.id;
    });
  }

  ngOnInit(): void {
    this.productForm = new FormGroup({
      name: new FormControl(null, [Validators.required]),
      surname: new FormControl(null, [Validators.required]),
    });
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let user = this.productsService.getOneById(this.id);
        this.user = await user;
      } catch (err) {
        console.error(err);
      }
      this.productForm.patchValue({
        name: this.user.name,
        surname: this.user.surname,
      });
    }
  }

  async onSave() {
    if (!isNullOrUndefined(this.id)) {
      try {
        await this.productsService.putOneById(this.id, this.productForm.value);
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        let res = await this.productsService.postOne(this.productForm.value);
        this.router.navigate([this.router.url, res.id]);
        this.getData();
      } catch (err) {
        console.error(err);
      }
    }
  }

  async onDelete() {
    try {
      await this.productsService.deleteOneById(this.id);
    } catch (err) {
      console.error(err);
    }
    this.router.navigate(['/products']);
  }
}
