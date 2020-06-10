import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';
import { IProduct } from './product'; 

const crudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};
@Injectable({
  providedIn: 'root'
})


export class ProductService {

  // private productUrl = 'assets/products/products.json';
  private productUrl = 'api/products';
  constructor(private httpClient: HttpClient) { }

  getProducts(): Observable<IProduct[]> {
    return this.httpClient.get<IProduct[]>(this.productUrl).pipe(
      // tap(data => console.log('All; ' + JSON.stringify(data))),
      catchError(this.handleError)
    );
  }
 
  getProduct(productId: number): Observable<IProduct> {
    if (productId === 0) {
      return of(this.initializeProduct());
    }
    const url = `${this.productUrl}/${productId}`;
    return this.httpClient.get<IProduct>(url)
      .pipe(
        // tap(data => console.log('getProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }  

  private initializeProduct(): IProduct {
      // Return an initialized object
      return {
        productId: 0,
        productName: null,
        productCode: null,
        tags: [''],
        releaseDate: null,
        price: null,
        description: null,
        starRating: null,
        imageUrl: null
      };
  }
  createProduct(product: IProduct): Observable<IProduct> {
    
    product.productId  = null;
    return this.httpClient.post<IProduct>(this.productUrl, product, crudOptions)
      .pipe(
        tap(data => console.log('createProduct: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }


  updateProduct(product: IProduct): Observable<null | IProduct> {
    const url = `${this.productUrl}/${product.productId}`;
    return this.httpClient.put<IProduct>(url, product, crudOptions)
      .pipe(
        tap(() => console.log('updateProduct: ' + product.productId)),
        // Return the product on an update
        map(() => product),
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse) {  
    console.error(err);
    return throwError(err);
  }
}
