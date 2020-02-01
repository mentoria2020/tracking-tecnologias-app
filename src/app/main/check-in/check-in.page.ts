import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Observable } from 'rxjs';
import { Tech } from 'src/app/models/tech.model';
import { TechService } from 'src/app/services/tech.service';

@Component({
  selector: 'track-check-in',
  templateUrl: './check-in.page.html',
  styleUrls: ['./check-in.page.scss'],
})
export class CheckInPage implements OnInit {
  originalTechs: Tech[];
  filteredTechs: Tech[];
  filtro: string;

  constructor(private menu: MenuController, private techService: TechService) { }

  ngOnInit() {
    this.techService.buscarTecnologias().subscribe(result => {
      this.originalTechs = result;
      this.filteredTechs = this.originalTechs;

      this.filtrarTecnologias(this.filtro);
    });
  }

  abrirMenu() {
    this.menu.toggle();
  }

  onSearchChange(event) {
    this.filtro = event.detail.value; 
    this.filtrarTecnologias(event.detail.value);
  }


  filtrarTecnologias(ipFiltro: string) {
    if (!ipFiltro) {
      this.filteredTechs = this.originalTechs;
      return;
    }

    let vaTechs: Tech[] = [];
    for (const t of this.originalTechs) {
      if (t.Nome.toLowerCase().startsWith(ipFiltro.toLowerCase())) {
        vaTechs.push(t);
      }
    }
    this.filteredTechs = vaTechs;
  }
}
