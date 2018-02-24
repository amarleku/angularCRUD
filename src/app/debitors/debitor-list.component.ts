import { Component, OnInit } from '@angular/core';
import { Http, Response, Headers } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { IProduct } from './debitor';
import { ProductService } from './debitor.service';
import 'rxjs/add/operator/toPromise';

@Component({
    templateUrl: './debitor-list.component.html',
    styleUrls: ['./debitor-list.component.css']
})
export class ProductListComponent implements OnInit {
    deletedproducts: any;
    pageTitle: string = 'Debitors List';
    imageWidth: number = 50; //avatar width
    imageMargin: number = 2; //avatar margin
    showImage: boolean = false; //avarar show-hide
    errorMessage: string;
    //httpConnect
    url: string = ('http://localhost:5554/client'); //url string to delete client
    //array
    filteredProducts: IProduct[];
    products: IProduct[] = [];
    idNumber: any;
    postdata: string;
    productsObj: object = {};
    //http constructor start here 
    constructor(private _productService: ProductService, private _http: HttpClient) {
    }
    //Get Clients ========   complete =======
    ngOnInit(): void {
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
            error => this.errorMessage = <any>error);
    }
    //create Client and update json 
    // addProduct(products) {
    //     this.productsObj = {
    //         "productId": "22",
    //         "productName": products.productName,
    //         "city": products.city,
    //         "releaseDate": "09/02/2018",
    //         "credit": products.credit,
    //         "nextPayment": 39.95,
    //         "imageUrl": "https://vignette.wikia.nocookie.net/tumblr-survivor-athena/images/7/7a/Blank_Avatar.png/revision/latest?cb=20161204161729"
    //     }
    //     this._http.post(this.url, JSON.stringify(products))
    //         .subscribe(reponse => {
    //             console.log(products);
    //             this.products.push(products);
    //         });
    // }

//create Client local
    addProduct(products){
        if (confirm("Are you sure you want to ADD " + products.productName + "?")) {
        console.log(products);
        this.products.push(products);
        }
    } 
    //Update Client 
    updatePost(products) {
        this._http.put(this.url, JSON.stringify(products))
            .subscribe(reponse => {
                console.log();
            },
            error => this.errorMessage = <any>error);
    }
    //Delete Client  
    deleteProduct(products) {
        this.productsObj = {}
        if (confirm("Are you sure you want to delete " + products.productName + "?")) {
            var index = this.products.indexOf(products); this.products.splice(index, 1);
            this._productService.deleteProduct(products.productId).subscribe(null, err => {
                ;
            });
        }
    }
    //Show-hide Adatar
    toggleImage(): void {
        this.showImage = !this.showImage;
    }
}