import { Component, OnInit } from '@angular/core';
import { ArticulosService } from './articulos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent implements OnInit{
  title = 'Proyecto 1';
  articulos:any;

  art={
    codigo:0,
    descripcion:"",
    precio:0
  }

  constructor(private ArticulosServicio: ArticulosService) { }

  ngOnInit(){
    this.recuperarTodos();
  }

  recuperarTodos(){
    this.ArticulosServicio.recuperarTodos().subscribe((result:any) => this.articulos = result);
  }

  alta() {
    this.ArticulosServicio.alta(this.art).subscribe((datos:any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  baja(codigo:number){
    this.ArticulosServicio.baja(codigo).subscribe((datos:any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  modificar(){
    this.ArticulosServicio.modificar(this.art).subscribe((datos:any) => {
      if (datos['resultado'] == 'OK') {
        alert(datos['mensaje']);
        this.recuperarTodos();
      }
    });
  }

  seleccionar(codigo:number){
    this.ArticulosServicio.seleccionar(codigo).subscribe((result:any) => this.art = result[0]);
  }

  hayRegistros(){
    return true;
  }
}
