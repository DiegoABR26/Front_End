import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSortModule } from '@angular/material/sort';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatSnackBarModule } from '@angular/material/snack-bar';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';

//Route
import { AppRoutingModule } from './app-routing.module';

//Services
import { InsertTrabajadorService } from './services/InsertTrabajador.service';
import { GetTipoHorario } from './services/GetTipoHorario.service';
import { ListTrabajadoresService } from './services/ListaTrabajadores.service';
import { InsertSedesService } from './services/InsertSede.service';
import { ListSedesService } from './services/ListaSedes.service';
import { InsertMontosPagosService } from './services/InsertMontosPagos.services';

//Components
import { ConsultaComponent } from './pages/consulta/consulta.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { UtilComponent } from './pages/util/util.component';
import { AsistenciaComponent } from './pages/asistencia/asistencia.component';



@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    RegistroComponent,
    UtilComponent,
    AsistenciaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSnackBarModule
  ],
  providers: [GetTipoHorario, InsertTrabajadorService,ListTrabajadoresService, InsertSedesService, ListSedesService, InsertMontosPagosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
