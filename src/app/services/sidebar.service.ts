import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {
  menu:any[]=[{
    titulo:'Dashboard!!',
    icono:'mdi mdi-gauge',
    submenu:[
      {titulo:'Main',url:'/'},
      {titulo:'Graficaas',url:'grafica'},
      {titulo:'Progresss Bar',url:'progress'}
    ]
  }];
  constructor() { }
}
