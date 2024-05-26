import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { AppComponent } from './app.component';

//Route
import { AppRoutingModule } from './app-routing.module';

//Services
import { InsertTrabajadorService } from './services/InsertTrabajador.service';
import { GetTipoHorario } from './services/GetTipoHorario.service';

//Components
import { ConsultaComponent } from './pages/consulta/consulta.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { PaginatedTableComponent } from './Business/paginated-table.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    RegistroComponent,
    PaginatedTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatPaginatorModule
  ],
  providers: [GetTipoHorario, InsertTrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
