import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, CanActivate, Route, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductDetailGuard implements CanActivate {
  constructor(private router:Router){}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      let id = +route.url[1].path;
      console.log("route.url[1] " + id);
      
      let id2 = route.paramMap.get('id');
      console.log("route.paramMap " + id2);

      if(isNaN(id) || id < 1)
      {
        alert("Invalid product Id");
        this.router.navigate(['/products']);
        return false;
      }

      return true;
  }
  
}
