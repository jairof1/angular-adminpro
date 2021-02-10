import { Component, Input, Output,EventEmitter } from '@angular/core';


@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styles: [
  ]
})
export class IncrementadorComponent {
  @Input() progress:number=50;
  @Output() valorSalida:EventEmitter<number> = new EventEmitter();
  
  
  cambiarValor(valor:number){
    if(this.progress>=100 && valor>=0){
      this.valorSalida.emit(100);
    return  this.progress=100;
    }
    if(this.progress<0 && valor<0){
      this.valorSalida.emit(0);

      return  this.progress=0;
    }
  
  
    this.progress=this.progress+valor;
    this.valorSalida.emit(this.progress);

  }
  
  onChange(valorNuevo:number){
  if(valorNuevo>=100){
this.progress=100;
  }else if(valorNuevo<=0){
this.progress=0;
  }else{
    this.progress=valorNuevo;
  }

  this.valorSalida.emit(this.progress);
  }

}
