import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'track-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {

  constructor(private menu:MenuController) { }

  ngOnInit() {
  }

  abrirMenu(){    
    this.menu.toggle();
  }

}
