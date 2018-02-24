import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IProduct } from './debitor';
import { ProductService } from './debitor.service';

@Component({
  templateUrl: './debitor-detail.component.html',
  styleUrls: ['./debitor-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle: string = 'Product Detail'; // page title
  errorMessage: string; // error  message
  product: IProduct; //get json structure from debitor.ts
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) {
  }
//call one client /id 
  ngOnInit() {
    const param = this._route.snapshot.paramMap.get('id');
    if (param) {
      const id = +param;
      this.getProduct(id);
    }
  }
  //get product id number
  getProduct(id: number) {
    this._productService.getProduct(id)
    .subscribe(
      product => this.product = product,
      error => this.errorMessage = <any>error);
  }
// back button 
  onBack(): void {
    this._router.navigate(['/debitors']);
  }

}
