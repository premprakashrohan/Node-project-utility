import { Injectable } from '@angular/core';
import {  HttpClient} from '@angular/common/http';

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) { }
  listProducts() {
    return this.http.get('http://localhost:3000/api/products');
  }
}
