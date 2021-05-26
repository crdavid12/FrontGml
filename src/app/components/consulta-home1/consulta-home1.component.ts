import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Home1Service } from '../../services/home1.service';

@Component({
  selector: 'app-consulta-home1',
  templateUrl: './consulta-home1.component.html',
  styles: [
  ]
})
export class ConsultaHome1Component implements OnInit {

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

}
