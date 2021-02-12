import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {
  public linktheme=document.querySelector('#theme');

  constructor() {
    const url=localStorage.getItem('theme') || `./assets/css/colors/default-dark.css`;

    this.linktheme.setAttribute('href',url);
   }

   cambiarTema(tema:string){
    const url=`./assets/css/colors/${tema}.css`
    this.linktheme.setAttribute('href',url);
    localStorage.setItem('theme',url);
    this.checkCurrentTheme();
    }

    
checkCurrentTheme(){

  const links=document.querySelectorAll('.selector');
  links.forEach(e=>{
    e.classList.remove('working');
    const btntheme=e.getAttribute('data-theme');
    const btnThemeUrl=`./assets/css/colors/${btntheme}.css`
    const currentTheme=this.linktheme.getAttribute('href');
  
    if(btnThemeUrl === currentTheme){
        e.classList.add('working');
    }
  });
  
  }
}
