import { Component, OnInit } from '@angular/core';
import { InfoPaginaService } from 'src/app/services/info-pagina.service';
import { Equipo } from 'src/app/interfaces/equipo.interface';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})

export class AboutComponent implements OnInit {

  equipo: Equipo[];

  constructor( public infoService: InfoPaginaService) {
    this.equipo = infoService.equipo;
  }

  ngOnInit() {
  }

}
