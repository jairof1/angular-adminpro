import { Component, OnInit } from '@angular/core';
import { element } from 'protractor';
import { SettingsService } from 'src/app/services/settings.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {


  
  constructor(private serviceSettings: SettingsService) { }
  
  ngOnInit(): void {
    this.serviceSettings.checkCurrentTheme();
  }

  cambiarTema(tema:string){
    this.serviceSettings.cambiarTema(tema);
  }



}
