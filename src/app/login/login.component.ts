import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  constructor(private _Router:Router) { }

  ngOnInit(): void {}

  loginForm : FormGroup = new FormGroup({
    email : new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl (null , [Validators.required]),

  });


  loginFun(data:FormGroup){
    console.log(data);
    this._Router.navigate(["/request"]);
  }
   


}
