import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from '../common/convert-to-spaces.pipe';
import { StarComponent } from '../common/star/star.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ProductDetailGuard } from './product-detail.guard';

const routes: Routes = [
  { path:'products', component:ProductListComponent},
  { path:'products/:id',
        canActivate:[ProductDetailGuard], 
        component:ProductDetailComponent},
  ];


@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent,
    ProductDetailComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(routes)
  ]
})
export class ProductModule { }
