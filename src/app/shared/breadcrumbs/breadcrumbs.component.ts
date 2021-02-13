import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivationEnd, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { filter,map } from 'rxjs/Operators';
@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit,OnDestroy {
titulo:string="";
tituloSub$:Subscription;
  constructor(private router:Router) { 
    this.tituloSub$=this.getArgumentosRuta().subscribe(e=>{
      console.log(e);
      this.titulo=e;
      document.title=`AdminPro - ${this.titulo}`;
    });
  }
  ngOnDestroy(): void {
    this.tituloSub$.unsubscribe();
  }

  getArgumentosRuta(){
   return this.router.events.pipe(
      filter(f=> f instanceof ActivationEnd  ),
      filter((r:ActivationEnd)=> r.snapshot.firstChild === null),
      map( m=> m.snapshot.data.titulo)
    );
      
  }

  ngOnInit(): void {
  }

}
