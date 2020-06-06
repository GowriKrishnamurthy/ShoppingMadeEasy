import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListComponent } from './Products/product-list/product-list.component';
import { ProductDetailComponent } from './Products/product-detail/product-detail.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ProductDetailGuard } from './Products/product-detail.guard';
import { ProductModule } from './Products/product.module';

const routes: Routes = [
      { path:'welcome', component:WelcomeComponent},
      { path:'', redirectTo:'welcome', pathMatch:'full'},
      { path:'**', redirectTo:'welcome', pathMatch:'full'},
      ];

@NgModule({
  imports: [ProductModule,
            RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
 