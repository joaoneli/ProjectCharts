import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor(private http: HttpClient) { }
  
  getAll(): Observable<Products[]> {
    return this.http.get<Products[]>('https://localhost:44368/api/product');
  }

}
