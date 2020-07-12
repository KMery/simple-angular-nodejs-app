import { Component } from '@angular/core';

import { ProductService } from '../services/product.service';
import { Product } from '../models/product';
import { ActivatedRoute, Router, Params } from '@angular/router';

// import { ProductAddComponent } from '../components/product-add.component';

@Component({
    selector: 'product-edit',
    templateUrl: '../views/product-add.html',
    providers: [
        ProductService
    ]
})

export class ProductEditComponent {
    public titulo:string;
    public product: Product;

    constructor(
        private _productService: ProductService,
        private _route: ActivatedRoute,
        private _router: Router
    ) {
        this.titulo = 'Editar producto'
    }

    ngOnInit() {
        console.log('product-edit.component cargado');
        console.log(this.titulo);

        this.getProduct();
    }

    onSubmit() {
        // console.log(this.product);
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            this._productService.editProduct(id, this.product).subscribe(
                response => {
                    if (response !== null) {
                        this._router.navigate(['/products']);
                    } else {
                        console.log(response);
                    }
                }, 
                error => {
                    console.log(<any>error);
                }
            )
        });    
    }


    getProduct() {
        this._route.params.forEach((params: Params) => {
            let id = params['id'];
            // alert(id)
            this._productService.getProduct(id).subscribe(
                response => {
                    if (response !== null) {
                        this.product = <any>response;
                        console.log(response);
                        
                    } else {
                        // console.log(response);
                        this._router.navigate(['/products']);
                    }
                },
                error => {
                    console.log(<any>error);
                    
                }
            )
        })
    }

    
}