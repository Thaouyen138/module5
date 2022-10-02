import { Injectable } from '@angular/core';
import {Product} from "../model/product";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  API_URl = 'http://localhost:3000/'

  constructor(private http: HttpClient) { }

  getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(this.API_URl + 'products');
  }
  saveProduct(product): Observable<void> {
    return this.http.post<void>(this.API_URl + 'products', product);
  };
  findById(id: number): Observable<Product>{
    return this.http.get<Product>(this.API_URl + 'products/' + id);

  }
  update(productEdit: Product){
    return this.http.patch<void>(this.API_URl + 'products/' + productEdit.id, productEdit);
  }
  delete(id: number){
    return this.http.delete<Product>(this.API_URl + 'products/' + id);
  }
}
