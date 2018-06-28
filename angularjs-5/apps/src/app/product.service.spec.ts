import { TestBed, inject, getTestBed, async } from '@angular/core/testing';
import { Observable } from 'rxjs/Observable';

import { ProductService } from './product.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { HttpTestingController, HttpClientTestingModule } from '@angular/common/http/testing';

describe('ProductService', () => {
  let injector: TestBed;
  let service: ProductService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule, HttpClientTestingModule],
      providers: [ProductService]
    });
    injector = getTestBed();
    service = injector.get(ProductService);
    httpMock = injector.get(HttpTestingController);
  });

  afterEach(() => httpMock.verify());

  it('should issue a request', async(inject([HttpClient, HttpTestingController], (http: HttpClient, backend: HttpTestingController ) => {
    http.get('http://localhost:3000/api/products').subscribe();
    const request = httpMock.expectOne('http://localhost:3000/api/products');
    expect(request.request.method).toBe('Get');
  })));

  it('should return products', () => {
    const dummyProducts = [
      {productName: 'Test Product', price: 1.99},
      {productName: 'Another Product', price: 15.99}
    ];

    service.listProducts().subscribe((products: any) => {
      expect(products.legth).toBe(2);
      expect(products).toEqual(dummyProducts);

    });
    const request = httpMock.expectOne('http://localhost:3000/api/products');
    expect( request.request.method).toBe('Get');
    request.flush(dummyProducts);
  });

});
