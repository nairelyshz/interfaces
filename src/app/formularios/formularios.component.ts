import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
/**
 * Usuarios
 * user = 1 profesor
 * user = 2 representante
 * user = 3 medico
 * user = 4 investigador
 */
  user:number;
  constructor() { }

  ngOnInit() {
  }

}
