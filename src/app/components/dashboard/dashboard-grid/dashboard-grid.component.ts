import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-grid',
  templateUrl: './dashboard-grid.component.html',
  styleUrls: ['./dashboard-grid.component.scss']
})
export class DashboardGridComponent implements OnInit {

  myProfits:Array<any> = [
    {id: 1, name: 'Vermelho', price: 3.50, amount: 10},
    {id: 2, name: 'Azul Claro', price: 5.50, amount: 5},
    {id: 3, name: 'Amarelo', price: 8.00, amount: 0},
    {id: 4, name: 'Cinza Claro', price: 7.55, amount: 1},
    {id: 4, name: 'Cinza Escuro', price: 13.70, amount: 25},
];

myCosts:Array<any> = [
  {id: 1, name: 'Sentence 1', price: 3.50, amount: 15},
  {id: 2, name: 'Sentence 2', price: 3.50, amount: 9},
  {id: 3, name: 'Sentence 3', price: 3.50, amount: 35},
];

displayedColumns: string[] = ['id', 'name', 'price', 'amount'];
dataSource = this.myProfits;

  constructor() { }

  ngOnInit(): void {
  }

}
