import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Vehiculos } from './vehiculos';

@Injectable({
  providedIn: 'root'
})
export class VehiculosService {
  private apiUrl: string = environment.baseUrl;

constructor(private http: HttpClient) { }

obtenerVehiculos(): Observable<Vehiculos[]> {
  return this.http.get<Vehiculos[]>(this.apiUrl);
}

}
