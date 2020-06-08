import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../common/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const routes: Routes = [
  { path:'products', component:ProductListComponent},
  { path:'products/:id',
        canActivate:[ProductDetailGuard], 
        component:ProductDetailComponent},
  {
        path: 'products/:id/edit',
        component:ProductEditComponent},
  ];

  @NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailComponent,
    ProductEditComponent],
  imports: [
    RouterModule.forChild(routes),
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ]
})
export class ProductModule { }
