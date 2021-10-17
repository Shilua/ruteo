import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministradorComponent } from './page/administrador/administrador.component';
import { DetalleComponent } from './componente/detalle/detalle.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FormComponent } from './componente/form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministradorComponent,
    DetalleComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
