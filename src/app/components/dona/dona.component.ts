import { Component, Input, OnInit } from '@angular/core';

import { ChartType } from 'chart.js';
import { MultiDataSet, Label,Color } from 'ng2-charts';
@Component({
  selector: 'app-dona',
  templateUrl: './dona.component.html',
  styles: [
  ]
})
export class DonaComponent implements OnInit {
  @Input() title:string ="sin titulo";
// Doughnut
@Input("labels") doughnutChartLabels: Label[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
@Input("data") doughnutChartData: MultiDataSet = [
  [350, 450, 100]
  
];
public doughnutChartType: ChartType = 'doughnut';

public colors:Color[]=[
  {backgroundColor:['#6587e6','#009FEE','#F02059']}
];
 constructor() { }

 ngOnInit(): void {
 }

 // events
 public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

 public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
   console.log(event, active);
 }

}
