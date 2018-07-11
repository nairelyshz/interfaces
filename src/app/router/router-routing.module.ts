import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginFormComponent } from '../login-form/login-form.component';
import { TypeUserComponent } from '../type-user/type-user.component';
import { MenuJuegosComponent } from '../menu-juegos/menu-juegos.component';
import { ContactoComponent } from '../contacto/contacto.component';
/*
 * Aqui van las rutas
 */ 
const routes: Routes = [
						{path: 'login', component: LoginFormComponent},
						{path: 'type_user', component: TypeUserComponent},
						{path: 'juegos', component: MenuJuegosComponent},
						{path: 'contacto', component: ContactoComponent},
						
						];

@NgModule({
  
  exports: [RouterModule]
})
export class RouterRoutingModule { }
