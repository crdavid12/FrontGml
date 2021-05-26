import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Home1Service {

  resultadoPeticion: any;

  constructor(private _http: HttpClient,
               private _router : Router) { }

  crearHome1(datos:any){
  const headers = new HttpHeaders().set("Content-Type", "application/json")
                                    // .set("authorization", this.token);

  console.log(datos);
  this._http.post("api/Categorias",{
    nombre: datos.nombre,
    fechaCreacion: datos.fechaCreacion

  }, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log("resutado api= ", this.resultadoPeticion);
      //this._router.navigate(['/despertador-admin'])
    });
  }

  getAllCategorias(){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(`api/Categorias`, {headers, observe:'response'});
  }

  getCategoria(id:number){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.get(`api/Categorias/${id}`, {headers, observe:'response'});
  }

  deleteCategoria(id:number){
    const headers = new HttpHeaders().set("Content-Type", "application/json");

    return this._http.delete(`api/Categorias/${id}`, {headers, observe:'response'});
  }

  updateCateogia(idres:number, datos:any){
    const headers = new HttpHeaders().set("Content-Type", "application/json")
                                    // .set("authorization", this.token);

    this._http.patch(`api/Categorias/${idres}`,{

      nombre: datos.nombre,
      FechaCreacion: datos.fechaCreacion
    }, {headers, observe:'response'})
    .subscribe(data => {
      this.resultadoPeticion = data;
      console.log("resutado api= ", this.resultadoPeticion);
      //this._router.navigate(['/despertador-admin'])
    });
  }

}
