import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-chart',
  templateUrl: './dashboard-chart.component.html',
  styleUrls: ['./dashboard-chart.component.scss']
})
export class DashboardChartComponent implements OnInit {

  public chartType: string = 'pie';

  public chartDatasets: Array<any>;

  public chartDatasets1: Array<any>;

  public chartLabels: Array<any>;

  public chartLabels1: Array<any>;

  public chartColors: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C', '#949FB1', '#4D5360'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870', '#A8B3C5', '#616774'],
      borderWidth: 2,
    }
  ];

  public chartColors1: Array<any> = [
    {
      backgroundColor: ['#F7464A', '#46BFBD', '#FDB45C'],
      hoverBackgroundColor: ['#FF5A5E', '#5AD3D1', '#FFC870'],
      borderWidth: 2,
    }
  ];

  public chartOptions: any = {
    responsive: true
  };

  myProfitsFinal:Array<any>
  myCostsFinal:Array<any>;
  
  myProfits:Array<any> = [
    {id: 1, name: 'Vermelho', price: 3.50, amount: 10},
    {id: 2, name: 'Azul Claro', price: 5.50, amount: 5},
    {id: 3, name: 'Amarelo', price: 8.00, amount: 0},
    {id: 4, name: 'Cinza Claro', price: 7.55, amount: 1},
    {id: 4, name: 'Cinza Escuro', price: 13.70, amount: 25},
];

myCosts:Array<any> = [
  {id: 1, name: 'Sentence 1', price: 3.60, amount: 15},
  {id: 2, name: 'Sentence 2', price: 13.50, amount: 9},
  {id: 3, name: 'Sentence 3', price: 16.90, amount: 35},
];

  constructor() { }

  ngOnInit(): void {
    this.myProfitsFinal = this.myProfits.map(item => item.name);
    this.myCostsFinal = this.myCosts.map(item => item.name);

    this.chartLabels = this.myProfitsFinal;
    this.chartLabels1 = this.myCostsFinal;

    this.myProfitsFinal = this.myProfits.map(item => item.price);
    this.myCostsFinal = this.myCosts.map(item => item.price);

    this.chartDatasets =  [
      { data: this.myProfitsFinal, label: 'Lucro' }
    ];

    this.chartDatasets1 =  [
      { data: this.myCostsFinal, label: 'Lucro' }
    ];
  }

  public chartClicked(e: any): void { }
  public chartHovered(e: any): void { }

}
