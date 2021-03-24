import { Component, OnInit } from '@angular/core';
import { Products } from 'src/app/models/products';
import { ChartsService } from 'src/app/services/dashboard/charts.service';


@Component({
  selector: 'app-dashboard-ngx-chart',
  templateUrl: './dashboard-ngx-chart.component.html',
  styleUrls: ['./dashboard-ngx-chart.component.scss']
})
export class DashboardNgxChartComponent implements OnInit {

fabio = [
  {
    name: "Germany",
    value: 8940000
  },
  {
    name: "USA",
    value: 5000000
  },
  {
    name: "France",
    value: 7200000
  },
  {
    name: "UK",
    value: 6200000
  }
];

  Products: Array<Products>;

  constructor(private chartsService : ChartsService) { 

     
    Object.assign(this, this.Products);
  }

  ngOnInit(): void {
    this.chartsService.getChartsProductsData().subscribe(result=>{
      this.Products = result;
    });

  }

  //view : number[] = [700, 400];

  // options
  gradient: boolean = false;
  showLegend: boolean = true;
  showLabels: boolean = true;
  isDoughnut: boolean = false;
  legendPosition: string = 'below';
  animations: boolean = true;

  colorScheme = {
    // domain: ['#5AA454', '#A10A28', '#C7B42C', '#AAAAAA']
    domain: ['#F7464A', '#46BFBD', '#FDB45C','#4D5360']
  };


  onSelect(data: any): void {
    console.log('Item clicked', JSON.parse(JSON.stringify(data)));
  }

  onActivate(data: any): void {
    console.log('Activate', JSON.parse(JSON.stringify(data)));
  }

  onDeactivate(data: any): void {
    console.log('Deactivate', JSON.parse(JSON.stringify(data)));
  }


}
