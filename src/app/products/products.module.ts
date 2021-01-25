import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductsEditComponent } from './products-edit/products-edit.component';
import { ProductsListComponent } from './products-list/products-list.component';
import { SortPipe } from '../shared/pipes/sort.pipe';
import { FilterPipe } from '../shared/pipes/filter.pipe';

@NgModule({
  declarations: [ProductsComponent, ProductsEditComponent, ProductsListComponent, SortPipe, FilterPipe],
  imports: [CommonModule, ProductsRoutingModule, ReactiveFormsModule, FormsModule],
})
export class ProductsModule {}

