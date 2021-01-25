import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { ProductsService } from 'src/app/shared/services/products.service';
import { isNullOrUndefined } from 'util';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css'],
})
export class ProductsListComponent implements OnInit {
  products: Product[];
  category=null;

  constructor(private productsService: ProductsService, private router: Router) {}

  ngOnInit(): void {
    this.getData();

  }

  async getData() {
    try {
      let products = this.productsService.getAll();
      this.products = isNullOrUndefined(await products) ? [] : await products;
    } catch (err) {
      console.error(err);
    }
  }

  onLinkProfile(id: number) {
    this.router.navigate([this.router.url, 'profile', id]);
  }

  async onDecreaseAmount(id: number) {
    try {
      let necessaryproduct = this.products.find(x => x.id === id);
      if (necessaryproduct.amount>=1)
        necessaryproduct.amount--;
      this.productsService.putOneById(id, necessaryproduct);
    } catch (err) {
      console.error(err);
    }
  }

  async onIncreaseAmount(id: number) {
    try {
      let necessaryproduct = this.products.find(x => x.id === id);
      necessaryproduct.amount++;
      this.productsService.putOneById(id, necessaryproduct);
    } catch (err) {
      console.error(err);
    }
  }

  onAddProfile() {
    this.router.navigate([this.router.url, 'profile']);
  }

  FindCategoryName(categoryid) {
    switch (categoryid) {
      case 0:
        return("Мебель");
      case 1:
        return("Техника");
      case 2:
        return("Книги");
      case 3:
        return("Телефоны");
    }
  }

  lastsort=-1;
  sortType=0;

  LastSortCounter(sortType: number){
    if (sortType==0) {
      if (this.lastsort!=0){
        this.lastsort=0;
      }
      else {
        this.lastsort=1;
      }
      this.sortType=0;
    }
    else {
      if (this.lastsort!=2){
        this.lastsort=2;
      }
      else {
        this.lastsort=3;
      }
      this.sortType=1;
    }
  }



}