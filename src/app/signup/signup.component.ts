import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl , Validators} from '@angular/forms'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  form!:FormGroup;

  constructor() { }

  ngOnInit(): void {

    this.form = new FormGroup({
      'username' : new FormControl('' , Validators.required),
      'email': new FormControl( '' ,  [Validators.required , Validators.email] ),
      'password': new FormControl('' , [Validators.required,Validators.minLength(8),Validators.maxLength(16)])
    })
  }

get username(){
  return this.form.get('username') as FormControl;
}

get email(){
  return this.form.get('email') as FormControl;
}

get password(){
  return this.form.get('password') as FormControl;
}

submitbtn(){
  console.log(this.form.value);
  this.form.reset();
}


}
