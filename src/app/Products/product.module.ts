import { NgModule } from '@angular/core';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { ProductDetailGuard } from './product-detail.guard';
import { SharedModule } from '../common/shared.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ReactiveFormsModule } from '@angular/forms';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ProductData } from './product-data';


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
    ReactiveFormsModule,
    InMemoryWebApiModule.forRoot(ProductData),
    SharedModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
