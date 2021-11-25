import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    email      : new FormControl(null , [Validators.required , Validators.email]),
    password: new FormControl (null , [Validators.required]),

  });

  constructor() { }

  ngOnInit(): void {

      
  }
    
  loginFun(data:FormGroup)
  {
    console.log(data);
  }

}
