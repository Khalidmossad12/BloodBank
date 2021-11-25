import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
<<<<<<< HEAD
import { FormControl, FormGroup, Validators } from '@angular/forms';
=======
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
>>>>>>> 25c63bb2b4ca945dc59132b0a58953b9cbef0514

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

<<<<<<< HEAD
=======
<<<<<<< HEAD
  
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

=======
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
>>>>>>> 25c63bb2b4ca945dc59132b0a58953b9cbef0514
  constructor() { }

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
<<<<<<< HEAD
  registerFormFun(data:FormGroup)
  {
    console.log(data) 
  }

=======
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
>>>>>>> 25c63bb2b4ca945dc59132b0a58953b9cbef0514
}
