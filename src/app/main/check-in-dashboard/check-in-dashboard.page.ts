import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { TechService } from 'src/app/services/tech.service';
import { Tech } from 'src/app/models/tech.model';
import { Observable } from 'rxjs';
import { Chart } from 'chart.js';

@Component({
  selector: 'track-check-in-dashboard',
  templateUrl: './check-in-dashboard.page.html',
  styleUrls: ['./check-in-dashboard.page.scss'],
})
export class CheckInDashboardPage implements OnInit {

  // @ViewChild('pie') pie: ElementRef;

  doughnutChart: Chart;

  techs: Observable<Tech[]>;
  constructor(private menu: MenuController, private techService: TechService) { }

  ngOnInit() {
    this.techs = this.techService.buscarTecnologias();
    let pie = document.getElementById('pie');
    this.doughnutChart = new Chart(pie, {
      type: "pie",
      data: {
        labels: ["Angular", "Outros"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 25],
            backgroundColor: [
              "rgba(0, 0, 0, 0.8)",
              "rgba(54, 162, 235, 0.8)",
            ],
            hoverBackgroundColor: ["#000010", "#36A2EB"]
          }
        ]
      },
      options: {        
        legend: false,        
      }

    });
  }

  recarregar() {

  }

  abrirMenu() {
    this.menu.toggle();
  }

}
