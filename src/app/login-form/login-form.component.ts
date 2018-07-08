import { Component, OnInit } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import {FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {
	loginForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  	this.loginForm = this.fb.group({
  		username:  ['', Validators.compose([Validators.required, Validators.email]) ],
  		password:   ['', Validators.compose([Validators.required,  Validators.minLength(6)]) ]
  	});
  }

    submit() {
    const email = this.loginForm.get('email').value;
    const password = this.loginForm.get('password').value;
  }

}
