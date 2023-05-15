import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginPageForm } from './login.page.form';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  form : FormGroup;

  constructor(private router: Router, private formBuilder: FormBuilder) { 
    this.form = new LoginPageForm(this.formBuilder).createForm();
    
    
    /*formBuilder.group({
      email: ["", [Validators.required, Validators.email]],
      password: ["", [Validators.required]]
    });*/
    
   // = new LoginPageForm(this.formBuilder).createForm();
  }

  ngOnInit() {
    
  }

  newTask(){
    console.log(this.form.value);
  }

  login(){
    this.router.navigate(['home']);
  }

  register(){
    this.router.navigate(['register']);
  }
}
