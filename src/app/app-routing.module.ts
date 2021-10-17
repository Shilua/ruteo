import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './componente/form/form.component';
import { AdministradorComponent } from './page/administrador/administrador.component';

const routes: Routes = [
  { path: 'administrador', component: AdministradorComponent },
  { path: '', component: FormComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
