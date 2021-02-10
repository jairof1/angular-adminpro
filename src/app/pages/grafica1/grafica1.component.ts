import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component implements OnInit {
  public labels1:string[]=['pppp','sssss','aaaaa'];
  public data1=[300,200,100];

  constructor() { }

  ngOnInit(): void {
  }

}
