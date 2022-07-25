import { Component, OnInit } from '@angular/core';
import { ModeloEmpleado } from 'src/app/modelos/modeloEmpleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-buscar-empleado',
  templateUrl: './buscar-empleado.component.html',
  styleUrls: ['./buscar-empleado.component.css']
})
export class BuscarEmpleadoComponent implements OnInit {

  listadoEmpleados: ModeloEmpleado[]=[];

  constructor(private emmpleadoservicio: EmpleadoService) { }

  ngOnInit(): void {
    this.obtenerListadoEmpleados();
  }

  obtenerListadoEmpleados(){
    this.emmpleadoservicio.buscarEmpleados().subscribe((datos: ModeloEmpleado[])=> {
      this.listadoEmpleados = datos;
    })

  }

}
