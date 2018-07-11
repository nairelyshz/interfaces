import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-formularios',
  templateUrl: './formularios.component.html',
  styleUrls: ['./formularios.component.css']
})
export class FormulariosComponent implements OnInit {
/**
 * Usuarios
 * user = 1 profesor
 * user = 2 representante
 * user = 3 medico
 * user = 4 investigador
 */

  nuevoUsuario:any = {};
  user:number;
  userStr:string;
  registerForm : FormGroup;
  constructor(private router : ActivatedRoute, private fb: FormBuilder,private _router : Router) {

  	this.router.queryParams.subscribe(params =>{
  			console.log("cons "+params['typeUSer']);
  			this.user = params['typeUSer'];
  		});
  	if (this.user==1) {
  		this.userStr = "PROFESOR";
  		this.createForm();
  	}else if(this.user==2){
  		this.userStr = "REPRESENTANTE";
  		this.createForm();
  	}else if(this.user==3){
  		this.userStr = "MÉDICO";
  		this.createForm();
  	}else if(this.user==4){
  		this.userStr = "INVESTIGADOR";
  		this.createForm();
  	}
  	
  }

  ngOnInit() {
  }

  createForm(){
  	this.registerForm = this.fb.group({
  		name:  ['', Validators.compose([Validators.required]) ],
  		last_name:   ['', Validators.compose([Validators.required]) ],
  		username:  ['', Validators.compose([Validators.required, Validators.email]) ],
  		ci:   ['', Validators.compose([Validators.required]) ],
  		edad:   ['', Validators.compose([Validators.required]) ],
  		genero: ['', Validators.compose([Validators.required]) ],
  		kid_name: ['' ],
  		kid_last_name: ['' ],
  		kid_ci: [''],
  		kid_edad:   [''],
  		kid_genero: [''],

  	});
  }



  submit() {
    
     this._router.navigate(['juegos']);
  }

}
