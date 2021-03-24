import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Products } from 'src/app/models/products';

@Injectable({
  providedIn: 'root'
})
export class ChartsService {

  constructor(private http: HttpClient) { }

  getChartsProductsData(): Observable<Products[]> {
    return this.http.get<Products[]>('https://localhost:44368/api/product/getChartsData');
  }
}
