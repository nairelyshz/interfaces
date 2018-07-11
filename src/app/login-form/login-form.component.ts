import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	loginForm: FormGroup;
  constructor(private fb: FormBuilder,
              private router : Router) { 

  }

  ngOnInit() {
  	this.loginForm = this.fb.group({
  		username:  ['', Validators.compose([Validators.required, Validators.email]) ],
  		password:   ['', Validators.compose([Validators.required,  Validators.minLength(6)]) ]
  	});
  }

    submit() {
      console.log(this.loginForm.value);
    const email = this.loginForm.value.username;
    const password = this.loginForm.value.password;
     this.router.navigate(['juegos'],{queryParams:{username:email,
                                                   password:password}});
  }

}
