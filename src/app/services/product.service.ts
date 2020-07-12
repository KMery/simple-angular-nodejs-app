import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators'; 
// import 'rxjs/add/operator/map'
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { GLOBAL } from './global'

@Injectable()
export class ProductService {
    public url:string;

    constructor(
        public _http: HttpClient
    ) {
        this.url = GLOBAL.url
    }

    getProducts() {
        // return 'txt desde el servicio'
        return this._http.get(this.url+'products')
        .pipe(res => res)
        // .pipe(
        //     map(data => {})
        // )
    }

    getProduct(id) {
        return this._http.get(this.url+'product/'+id)
        .pipe(map(res => res))
    }

    addProduct(product: Product) {
        let json = JSON.stringify(product);
        // let params = 'json='+json;
        let params = json;
        let headers = new HttpHeaders({'Content-Type': 'application/json'});

        return this._http.post(this.url+'products', params, { headers: headers })
            .pipe(map(res => res))
    }

    editProduct(id, product: Product) {
        let json = JSON.stringify(product);
        let params = json;
        let headers = new HttpHeaders({'Content-Type': 'application/json'});
        return this._http.put(this.url+'product/'+id, params, { headers: headers })
            .pipe(map(res => res))
    }

    deleteProduct(id) {
        return this._http.delete(this.url+'product/'+id)
            .pipe(map(res => res))
    }
}