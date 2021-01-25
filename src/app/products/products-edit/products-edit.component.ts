import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product, MyCategoryProduct } from 'src/app/shared/models/product.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { isNullOrUndefined } from 'util';
import { ProductsService } from 'src/app/shared/services/products.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './products-edit.component.html',
  styleUrls: ['./products-edit.component.css'],
})
export class ProductsEditComponent implements OnInit {
  id: number;
  product: Product;
  productForm: FormGroup;
  category: number;
  myCategoryProduct: MyCategoryProduct;

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
      article: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      brand: new FormControl(null, [Validators.required]),
      category: new FormControl(null, [Validators.required]),
      weight: new FormControl(null, [Validators.required]),
      amount: new FormControl(null, [Validators.required]),
    });
    this.getData();
  }

  async getData() {
    if (!isNullOrUndefined(this.id)) {
      try {
        let product = this.productsService.getOneById(this.id);
        this.product = await product;
      } catch (err) {
        console.error(err);
      }
      this.productForm.patchValue({
        name: this.product.name,
        article: this.product.article,
        price: this.product.price,
        brand: this.product.brand,
        category: this.product.category,
        weight: this.product.weight,
        amount: this.product.amount,
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
