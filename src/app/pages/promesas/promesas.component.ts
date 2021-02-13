import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styleUrls: ['./promesas.component.css']
})
export class PromesasComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const promesa= new Promise((resolve,reject)=>{
      if(false){
        resolve('hola mundo')
      }else{
        reject('Algo salio mal')
      }
    });

    promesa.then((mensaje)=>{
      console.log(mensaje);
    }).catch(e => console.log("Error en mi promesa",e));
    console.log("fin de mi promesa");

  }

}
