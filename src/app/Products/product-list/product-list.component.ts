import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit, AfterViewInit {

  pageTitle: string = 'Product List';
  imageWidth: number = 50;
  imageMargin: number = 2;
  showImage: boolean = true;

  filteredProducts: IProduct[] = [];
  products: IProduct[] = [];
  errorMessage:string;
  
  @ViewChild('filterElement', { static: false }) filterElementRef: ElementRef;

  _listFilter: string='';

  get listFilter(): string {
    return this._listFilter;
  }
  set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }

  constructor(private productService:ProductService) {    
  }

  ngAfterViewInit(): void {
    this.filterElementRef.nativeElement.focus();
  }

  ngOnInit() {
    this.productService.getProducts().subscribe({
     next: products=> {
       this.products = products
       this.filteredProducts = this.products;
     },
     error: err => this.errorMessage = err
   }); 
 }
  toggleImage(): void {
    this.showImage = !this.showImage;
  }

  performFilter(filterBy: string): IProduct[] {
    filterBy = filterBy.toLocaleLowerCase();
    return this.products.filter((product: IProduct) =>
      product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
  }
  onRatingClicked(message:string):void{
    this.pageTitle = 'Product List ' + message;
  }

}
