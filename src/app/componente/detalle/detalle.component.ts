import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {
  @Input() colorRecibido:string;
  //@Output() eventoCambioColor:EventEmitter<any> = new EventEmitter<any>();
  color:string;
  constructor() { 
    this.color = 'rojo';
    this.colorRecibido = 'rojo';
  }

  ngOnInit(): void {
  }

  cambiarColor(){
    this.color = 'azul';
  }

}
