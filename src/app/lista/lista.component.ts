import { Component, OnInit, SystemJsNgModuleLoaderConfig } from '@angular/core';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.scss']
})
export class ListaComponent implements OnInit {
  
  san: Array<string>;
  luis:Array<string>;
  jorge:Array<string>;
  juan:Array<string>;
  sergio:Array<string>;
  f:null;
  constructor() { 

    this.luis=['50', 'Luis', 'Fernando', 'Medellín', 'Af'];
    this.jorge=['34', 'Jorge', 'Nitales', 'Londres', 'Gf']
    this.san=['10', 'Santiago', 'Velazques', 'Bogotá', 'Df']
    this.juan=['45', 'Juan', 'Marcos', 'Barranquilla', 'Sf']
    this.sergio=['23', 'Sergio', 'Gomez', 'Cali', '9f']
    this.f=null;
  }

  ngOnInit(): void {
    alert("Bienvenido")
  }

  agregar(){
    alert("Agregar")
    
  }
}
