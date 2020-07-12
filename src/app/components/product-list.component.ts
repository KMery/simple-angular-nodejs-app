import { Component } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../services/product.service';
import { Product } from '../models/product';


@Component({
    selector: 'productos-list',
    templateUrl: '../views/product-list.html',
    providers: [
        ProductService
    ]
})
export class ProductListComponent {
    public titulo:string;
    // public products: Product[];
    // public myArr:Array<any> 
    public products: any = [];
    public confirm;


    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
        private _productService: ProductService 
    ) {
        this.titulo = 'Listado de productos';
        this.confirm = null;
    }

    ngOnInit() {
        console.log('Se ha cargado products-list component');
        // alert(this._productService.getProducts());
        // console.log(this._productService.getProducts());
        this._productService.getProducts().subscribe(
            result => {
                // console.log(result);
                this.products = result;
                console.log(this.products);

                for (var p in this.products) {
                    // console.log(this.products[p]);
                    console.log(this.products[p].plate);
                    console.log(this.products[p].price);
                }
                
            },
            error => {
                console.log(<any>error)
            }
        )
    }

    deleteConfirm(id) {
        this.confirm = id;
    }

    cancelConfirm() {
        this.confirm = null;
    }

    onDeleteProduct(id) {
        this._productService.deleteProduct(id).subscribe(
            response => {
                if (response !== null) {
                    console.log('producto borrado!');
                    this._router.navigate(['/home']);
                } else {
                    console.log(<any>response);
                }
            },
            error => {
                console.log(<any>error);
                
            }
        )
    }
}