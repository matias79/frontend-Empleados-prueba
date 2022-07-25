import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ModeloEmpleado } from '../modelos/modeloEmpleado';

@Injectable({
  providedIn: 'root'
})
export class EmpleadoService {
 url = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  buscarEmpleados():Observable<ModeloEmpleado[]>{
    return this.http.get<ModeloEmpleado[]>(`${this.url}/empleados`)
  }

  CrearEmpleado(empleado: ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.post<ModeloEmpleado>(`${this.url}/empleados`,empleado)

  }

  ActualizarEmpleado(empleado: ModeloEmpleado):Observable<ModeloEmpleado>{
    return this.http.put<ModeloEmpleado>(`${this.url}/empleados`,empleado)

  }

  EliminarEmpleado(id: string):Observable<any>{
    return this.http.delete(`${this.url}/empleados/${id}`)

  }
}
