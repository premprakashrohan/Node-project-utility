import { Component, OnInit} from '@angular/core';
import { ProductService } from '../product.service';

@Component({
    selector: 'app-first-component',
    template: `<h1>Hello, this is my first template</h1>
    <p>This is cool!</p>
    <ul><li> Name Cost </li>
    <li *ngFor = "let product of products">{{product.name}}, {{product.price}}</li>
    </ul>`,
    styles: ['h1 {color:red;}']
})
export class FirstComponent implements OnInit {

    constructor (private productService: ProductService ) { }
    products;
    ngOnInit() {
        this.productService.listProducts().subscribe(products => this.products = products);
    }

}
