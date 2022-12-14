import { Component, OnInit } from '@angular/core';
import {  FormControl, FormGroup, Validators  } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  form!: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.form = new FormGroup({
      'email': new FormControl( '' ,  [Validators.required , Validators.email] ), 
      'password': new FormControl('' , [Validators.required,Validators.minLength(8),Validators.maxLength(16)])
   
    })
  }


  get email(){
    return this.form.get('email') as FormControl;
  }

  get password(){
    return this.form.get('password') as FormControl;
  }


  clicksub(){
    console.log(this.form.value);
    this.form.reset();
  }


}
