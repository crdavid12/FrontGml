import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home1Service } from '../../services/home1.service';

@Component({
  selector: 'app-actualizar-home1',
  templateUrl: './actualizar-home1.component.html',
  styles: [
  ]
})
export class ActualizarHome1Component implements OnInit {

  categoria:any;
  resultadoPeticion:any;

  constructor(private _activatedRoute : ActivatedRoute,
              private _home1Service : Home1Service) {
    //Captura de la ruta
    _activatedRoute.params.subscribe( paramas =>{
      this.categoria=this.getCategoria(paramas['id']);

    });
   }

  ngOnInit(): void {
  }

  getCategoria(id:number){
    this._home1Service.getCategoria(id).subscribe(data => {

      this.resultadoPeticion = data.body;
      console.log("Componente= " + this.resultadoPeticion);

  });
  }

  actualizarCategoria(id:number){
    let datos={
      id:((document.getElementById("idHome1") as HTMLInputElement).value),
      nombre : ((document.getElementById("nombreHome1") as HTMLInputElement).value),
      fechaCreacion : ((document.getElementById("fechaCreacion") as HTMLInputElement).value)
    }

    this._home1Service.updateCateogia(id, datos)
  }

}
