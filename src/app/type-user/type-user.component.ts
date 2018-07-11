import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-type-user',
  templateUrl: './type-user.component.html',
  styleUrls: ['./type-user.component.css']
})
export class TypeUserComponent implements OnInit {
	/**
 * Usuarios
 * user = 1 profesor
 * user = 2 representante
 * user = 3 medico
 * user = 4 investigador
 */
	 users = [
    {user: 'PROFESOR'},
    {user: 'MÉDICO'},
    {user: 'REPRESENTANTE'},
    {user: 'INVESTIGADOR'},
  ];
  constructor(private router : Router) { }

  ngOnInit() {
  }

  selectUser(typeUser){
  	console.log(typeUser);
  	this.router.navigate(['registrarse'],{queryParams:{typeUser:typeUser}});
  } 

}
