
import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from '../debitors/debitor';
import { Http, Response, Headers } from '@angular/http';
import { ProductService } from '../debitors/debitor.service';
import 'rxjs/add/operator/toPromise';
@Component({
    templateUrl: './welcome.component.html'
})
export class WelcomeComponent {
    pageTitle: string = 'Welcome '; // page name 
    filteredProducts: IProduct[];
    products: IProduct[] = [];

    //Call http here 
    constructor(private _productService: ProductService, private _http: HttpClient) {

    }
    //get all client
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            });
    }
}
