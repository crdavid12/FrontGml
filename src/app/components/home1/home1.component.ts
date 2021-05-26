import { Component, OnInit } from '@angular/core';
import { Home1Service } from '../../services/home1.service';
import { Router } from '@angular/router';



@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styles: [
  ]
})
export class Home1Component implements OnInit {

  resultadoPeticion:any;

  constructor(private _home1Service : Home1Service,
    private rutas :Router) { }

  ngOnInit(): void {
  }

  getAllCategorias(){

    this._home1Service.getAllCategorias().subscribe(data => {
        this.resultadoPeticion = data.body;
    });


  }

  verHome1(id:any){
    // console.log(id);
    this.rutas.navigate(['/ConsultaHome1',id]);
  }

  eliminarHome1(id:any){
    var mensaje = confirm('Desea Eliminar el item seleccionado')
      if(mensaje == true){
        this._home1Service.deleteCategoria(id).subscribe(data => {
          this.resultadoPeticion = data.body;
      });
        // this.rutas.navigate(['/home1'])
      }
  }

  actualizarhome1(id:any){
    this.rutas.navigate(['/ActualizarHome1',id]);
  }

}
