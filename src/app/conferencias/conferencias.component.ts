import { Component, OnInit } from '@angular/core';
import { Conferencias } from './conferencias';
import { dataConferencias } from './dataConferencias';
import { ConferenciasService } from './conferencias.service';

@Component({
  selector: 'app-conferencias',
  templateUrl: './conferencias.component.html',
  styleUrls: ['./conferencias.component.css']
})
export class ConferenciasComponent implements OnInit {

  constructor(private conferenciasService: ConferenciasService) { }

  conferencias: Array<Conferencias> = [];
  getConferencias() {
    this.conferenciasService.getConferencias().subscribe( conferencias => {
      this.conferencias = conferencias;
    });
  }
  ngOnInit() {
    this.getConferencias();
  }

}
