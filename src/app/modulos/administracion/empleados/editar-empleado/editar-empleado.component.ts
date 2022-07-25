import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModeloEmpleado } from 'src/app/modelos/modeloEmpleado';
import { EmpleadoService } from 'src/app/servicios/empleado.service';

@Component({
  selector: 'app-editar-empleado',
  templateUrl: './editar-empleado.component.html',
  styleUrls: ['./editar-empleado.component.css']
})
export class EditarEmpleadoComponent implements OnInit {

  id: string = '';
  fgvalidador: FormGroup = this.fb.group({
    'id': ['',[Validators.required]],
    'nombres': ['',[Validators.required]],
    'apellidos': ['',[Validators.required]],
    'sexo': ['',[Validators.required]],
    'estrato': ['',[Validators.required]],
    'fechaNacimiento': ['',[Validators.required]],
    'fechaIngreso': ['',[Validators.required]],
  })
  constructor(private fb: FormBuilder,
    private servicioEmpleado: EmpleadoService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.buscarProducto()
  }

  buscarProducto(){
    this.servicioEmpleado.buscarEmpleadosPorId(this.id).subscribe((datos:ModeloEmpleado)=>{
    this.fgvalidador.controls["id"].setValue(this.id);
    this.fgvalidador.controls["nombres"].setValue(datos.nombres);
    this.fgvalidador.controls["apellidos"].setValue(datos.apellidos);
    this.fgvalidador.controls["sexo"].setValue(datos.sexo);
    this.fgvalidador.controls["estrato"].setValue(datos.estrato);
    this.fgvalidador.controls["fechaNacimiennto"].setValue(datos.fechaNacimiento);
    this.fgvalidador.controls["fechaIngreso"].setValue(datos.fechaIngreso);
    });
  }

  EditarEmpleado(){
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
    em.id = this.id;
    this.servicioEmpleado.ActualizarEmpleado(em).subscribe((datos: ModeloEmpleado)=>{
      alert("empleado actualizado correctamente");
      this.router.navigate(["/admnistracion/listar-empleados"]);
    },(error: any)=>{
      alert("error al actualizar empleado");
    })
  }
}
