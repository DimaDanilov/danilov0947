import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';

@NgModule({
  declarations: [ProductsComponent, ProductsEditComponent, ProductsListComponent],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule, FormsModule],
})
export class ProductsModule {}

