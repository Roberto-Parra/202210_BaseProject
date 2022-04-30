import { Component, OnInit } from '@angular/core';
import { Vehiculos } from '../vehiculos';
import { VehiculosService } from '../vehiculos.service';

@Component({
  selector: 'app-vehiculos-list',
  templateUrl: './vehiculos-list.component.html',
  styleUrls: ['./vehiculos-list.component.css']
})
export class VehiculosListComponent implements OnInit {
  vehiculos: Vehiculos[] = [];

  constructor(private vehiculosService: VehiculosService) { }

  ngOnInit() {
    this.vehiculosService.obtenerVehiculos().subscribe(vehiculos => {this.vehiculos = vehiculos;});
  }

}
