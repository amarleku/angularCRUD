import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './debitor';
import { ProductService } from './debitor.service';
import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: './edit.component.html'
})

export class EditComponent implements OnInit {
    name: string = 'Personal Information';
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    errorMessage: any;
    constructor(private _productService: ProductService, private _http: HttpClient) {
    }
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }
}

