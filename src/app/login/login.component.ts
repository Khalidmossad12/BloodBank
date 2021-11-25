import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======

>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
>>>>>>> 25c63bb2b4ca945dc59132b0a58953b9cbef0514
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

<<<<<<< HEAD
  constructor() { }

  ngOnInit(): void {
=======
<<<<<<< HEAD
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
=======
  constructor() { }

  ngOnInit(): void {
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
>>>>>>> 25c63bb2b4ca945dc59132b0a58953b9cbef0514
  }

}
