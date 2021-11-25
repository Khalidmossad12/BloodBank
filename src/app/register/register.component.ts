import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  
  registerForm : FormGroup = new FormGroup({
    firstName : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    lastName  : new FormControl(null , [Validators.required , Validators.minLength(3) , Validators.maxLength(15)]),
    email      : new FormControl(null , [Validators.required , Validators.email]),
    phoneNumber   : new FormControl(null , [Validators.required]),
    city        : new FormControl (null , [Validators.required]),
    location: new FormControl (null , [Validators.required]),
    password: new FormControl (null , [Validators.required]),
    bloodGroup: new FormControl (null , [Validators.required]),

  });


  constructor(private _Router:Router) { }

  ngOnInit(): void {
  }

  registerFormFun(data:FormGroup)
  {
    console.log(data) 
    this._Router.navigate(["/login"]);
  }

}
