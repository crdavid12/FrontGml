import { Component, OnInit } from '@angular/core';
import { Home1Service } from '../../services/home1.service';




@Component({
  selector: 'app-creacionhome1',
  templateUrl: './creacionhome1.component.html',
  styles: [
  ]
})
export class Creacionhome1Component implements OnInit {

  constructor(private _home1Service : Home1Service) { }

  ngOnInit(): void {
  }

  crearHome1(){
    let datos={
      nombre : ((document.getElementById("nombreHome1") as HTMLInputElement).value),
      fechaCreacion : ((document.getElementById("fechaCreacion") as HTMLInputElement).value)
    }

    this._home1Service.crearHome1(datos);
  }
}
