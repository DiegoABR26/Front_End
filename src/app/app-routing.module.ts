// src/app/app-routing.module.ts
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { UtilComponent } from './pages/util/util.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';
import { HomeComponent } from './pages/home/home.component';
//import { Pagina3Component } from './pagina3/pagina3.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'consulta', component: ConsultaComponent },
  { path: 'util', component: UtilComponent },
  { path: 'asistencia', component: AsistenciaComponent },
 // { path: 'pagina3', component: Pagina3Component },
  { path: '**', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
