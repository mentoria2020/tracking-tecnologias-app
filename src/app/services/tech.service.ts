import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Tech } from '../models/tech.model';

@Injectable({
  providedIn: 'root'
})
export class TechService {

  constructor() { }

  buscarTecnologias(): Observable<Tech[]> {
    let vaAngular = new Tech();
    vaAngular.Nome = 'Angular';
    vaAngular.QtdeCheckIn = 102;
    vaAngular.Parents = 'Typescript, Javascript';

    let vaReact = new Tech();
    vaReact.Nome = 'React';
    vaReact.QtdeCheckIn = 1072;
    vaReact.Parents = 'Javascript';

    return of([vaAngular, vaReact, {
      Nome: 'Delphi',
      QtdeCheckIn: 100,
      Parents:'Pascal'
    }]);
  }
}
