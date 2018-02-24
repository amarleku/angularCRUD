import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse} from '@angular/common/http';
import{RequestOptions,Headers}from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { HttpHeaders } from '@angular/common/http';
import 'rxjs/add/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

import { IProduct } from './debitor';
//get data fom local JSON server_url
@Injectable()
export class ProductService {
    [x: string]: any;
    id:number;
    private _productUrl = 'http://localhost:5554/client';
    private _deleteUrl = 'http://localhost:5554/client?productId=';
    private insertUrl = 'http://localhost:5554/client?productId=';

    constructor(private _http: HttpClient) { }

    headers = new Headers({

        'Content-Type': 'application/json',
        'Accept': 'application/json'     
    });
    // get all JSON data
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.id === id));
    }
    deleteProducts(): Observable<IProduct[]> {
        return this._http.delete<IProduct[]>(this._deleteUrl)
            .do(data => console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError);
    }
    deleteProduct(id: number): Observable<IProduct> {
        return this.deleteProducts()
            .map((products: IProduct[]) => products.find(p => p.id === id));
            
    }
    //if there is an error show a  message 
    private handleError(err: HttpErrorResponse) {
        let errorMessage = '';
        if (err.error instanceof Error) {

            errorMessage = `An error occurred: ${err.error.message}`;
        } else {

            errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        //return data
        //console.error(errorMessage);
        return Observable.throw(errorMessage);
    }
}
