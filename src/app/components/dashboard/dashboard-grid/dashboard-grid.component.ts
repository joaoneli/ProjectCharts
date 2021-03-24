import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ProductsService } from 'src/app/services/dashboard/products.service';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {


Products: Array<Products>;
displayedColumns: string[] = ['id', 'name', 'price', 'amount'];

  constructor(private productsService : ProductsService) { }

  ngOnInit(): void {
    this.getAll(); 
  }

  getAll(): void {
    this.productsService.getAll().subscribe(result=>{
      this.Products = result;
    });
  }

}
