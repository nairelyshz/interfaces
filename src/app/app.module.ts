import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LoginFormComponent } from './login-form/login-form.component';
import { TypeUserComponent } from './type-user/type-user.component';
import { PakimanComponent } from './contacto/pakiman.component';
import { MenuJuegosComponent } from './menu-juegos/menu-juegos.component';
import { FooterComponent } from './footer/footer.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { Routes, RouterModule } from '@angular/router';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule, AngularFireDatabase } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import {JuegoComponent} from './juego/juego.component';

export const firebaseConfig = {
    apiKey: "AIzaSyApahmLMQjDCUJmRXat2kE2TWgj146QjnU",
    authDomain: "jmarcanoproyectointerfaces.firebaseapp.com",
    databaseURL: "https://jmarcanoproyectointerfaces.firebaseio.com",
    projectId: "jmarcanoproyectointerfaces",
    storageBucket: "jmarcanoproyectointerfaces.appspot.com",
    messagingSenderId: "7529964004"
};

const routes: Routes = [
            {path: '', redirectTo: 'login', pathMatch: 'full'},
            {path: 'login', component: LoginFormComponent},
            {path: 'type_user', component: TypeUserComponent},
            {path: 'juegos', component: MenuJuegosComponent},
            {path: 'pakiman', component: PakimanComponent},
            {path: 'registrarse', component: FormulariosComponent},
            ];

@NgModule({
  declarations: [
    AppComponent,
    LoginFormComponent,
    TypeUserComponent,
    PakimanComponent,
    MenuJuegosComponent,
    FooterComponent,
      JuegoComponent,
    FormulariosComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
      AngularFireModule.initializeApp(firebaseConfig),
      AngularFireDatabaseModule,
      AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
