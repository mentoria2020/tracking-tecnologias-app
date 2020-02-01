
import { Component, OnInit } from '@angular/core';
import { Platform, NavController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'track-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage {

  public appPages = [
    {
      title: 'Check-In',
      url: '/main/check-in',
      icon: 'home'
    },
    {
      title: 'Dashboard',
      url: '/main/dashboard', 
      icon:'pie'     
    }
  ];

  constructor() {
    
  }

  
}

