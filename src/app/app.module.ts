import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Route
import { AppRoutingModule } from './app-routing.module';

//Services
import { InsertTrabajadorService } from './services/InsertTrabajador.service';
import { GetTipoHorario } from './services/GetTipoHorario.service';

//Components
import { AppComponent } from './app.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [GetTipoHorario, InsertTrabajadorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
