import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-administrador',
  templateUrl: './administrador.component.html',
  styleUrls: ['./administrador.component.css']
})
export class AdministradorComponent implements OnInit {
  colorActual:string
  constructor() { 
    this.colorActual = 'celeste'
  }

  ngOnInit(): void {
  }

}
