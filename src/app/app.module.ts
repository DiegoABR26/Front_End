import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Route
import { AppRoutingModule } from './app-routing.module';

//Components
import { AppComponent } from './app.component';
import { ConsultaComponent } from './pages/consulta/consulta.component';
import {RegistroComponent} from './pages/registro/registro.component';
import { FormsModule } from '@angular/forms';
import { listarTrabajadores } from './services/listarTrabajadores.service';


@NgModule({
  declarations: [
    AppComponent,
    ConsultaComponent,
    RegistroComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [listarTrabajadores],
  bootstrap: [AppComponent]
})
export class AppModule { }
