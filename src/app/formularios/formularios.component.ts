import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

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
  user:number;
  userStr:string;
  registerForm : FormGroup;
  constructor(private router : ActivatedRoute, private fb: FormBuilder) { 
  	this.router.queryParams.subscribe(params =>{
  			console.log("cons "+params['typeUSer']);
  			this.user = params['typeUSer'];
  		});
  	if (this.user==1) {
  		this.userStr = "PROFESOR";
  	}else if(this.user==2){
  		this.userStr = "REPRESENTANTE";
  	}else if(this.user==3){
  		this.userStr = "MÉDICO";
  	}else if(this.user==4){
  		this.userStr = "INVESTIGADOR";
  	}
  	this.registerForm = this.fb.group({
  		name:  ['', Validators.compose([Validators.required]) ],
  		last_name:   ['', Validators.compose([Validators.required]) ],
  		ci:   ['', Validators.compose([Validators.required]) ],
  		edad:   ['', Validators.compose([Validators.required]) ],
  		genero: ['', Validators.compose([Validators.required]) ],

  	});
  }

  ngOnInit() {
  }

}
