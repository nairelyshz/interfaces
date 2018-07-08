import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TypeUserComponent } from './type-user/type-user.component';
import { RouterRoutingModule } from './router/router-routing.module';
import { ContactoComponent } from './contacto/contacto.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TypeUserComponent,
    ContactoComponent,
    MenuJuegosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
