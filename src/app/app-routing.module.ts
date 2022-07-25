import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './comunes/error/error.component';
import { InicioComponent } from './comunes/inicio/inicio.component';

const routes: Routes = [
  {
    path: 'inicio',
    component:InicioComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/inicio'
  },
  {
    path: 'administracion',
    loadChildren: () => import("./modulos/administracion/administracion.module").then(x =>x.AdministracionModule)
  },
  {
    path: '**',
    component: ErrorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
