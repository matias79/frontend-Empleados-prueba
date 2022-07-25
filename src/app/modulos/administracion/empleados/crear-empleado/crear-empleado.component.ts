import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/modeloEmpleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-crear-empleado',
  templateUrl: './crear-empleado.component.html',
  styleUrls: ['./crear-empleado.component.css']
})
export class CrearEmpleadoComponent implements OnInit {
  fgvalidador: FormGroup = this.fb.group({
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'sexo': ['',[Validators.required]],
    'estrato': ['',[Validators.required]],
    'fechaNacimiento': ['',[Validators.required]],
    'fechaIngreso': ['',[Validators.required]],
  })
  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router) { }

  ngOnInit(): void {
  }

  GuardaEmpleado(){
    let nombres = this.fgvalidador.controls["nombres"].value;
    let apellidos = this.fgvalidador.controls["apellidos"].value;
    let sexo = this.fgvalidador.controls["sexo"].value;
    let estrato = this.fgvalidador.controls["estrato"].value;
    let fechaNacimiento = this.fgvalidador.controls["fechaNacimiennto"];
    let fechaIngreso = this.fgvalidador.controls["fechaIngreso"];

    let em = new ModeloEmpleado();
    em.nombres = nombres;
    em.apellidos = apellidos;
    em.sexo = sexo;
    em.estrato = estrato;
    em.fechaNacimiento;
    em.fechaIngreso;
    this.servicioEmpleado.CrearEmpleado(em).subscribe((datos: ModeloEmpleado)=>{
      alert("producto almacenado correctamente");
      this.router.navigate(["/admnistracion/listar-empleados"]);
    },(error: any)=>{
      alert("error al almacenar");
    })
  }

}
