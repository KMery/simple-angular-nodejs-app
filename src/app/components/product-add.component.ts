import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { error } from 'protractor';

// import { ProductEditComponent } from '../components/product-edit.component';

@Component({
    selector: 'add-product',
    templateUrl: '../views/product-add.html',
    providers: [
        ProductService
    ]
})
export class ProductAddComponent {
    public titulo:string;
    public product: Product;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Crear un nuevo producto'
        this.product = new Product('',0)
    }

    ngOnInit() {
        console.log('producto-add.component cargado');
    }

    onSubmit() {
        console.log(this.product);
        this._productService.addProduct(this.product).subscribe(
            response => {
                if (response !== null) {
                    this._router.navigate(['/home']);
                } else {
                    console.log(response);
                }
            }, 
            error => {
                console.log(<any>error);
            }
        );
    }
}