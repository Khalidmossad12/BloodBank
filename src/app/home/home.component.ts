import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD
=======
import { Router } from '@angular/router';
import { OwlOptions } from 'ngx-owl-carousel-o';
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
<<<<<<< HEAD

  constructor() { }
=======
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    autoplay:true,
    autoplayHoverPause:true,
    margin:10,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 5
      }
    },
    nav: true
  }

  constructor(private _Router:Router) { }
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994

  ngOnInit(): void {
  }

<<<<<<< HEAD
=======
  register(){
    this._Router.navigate(["/register"]);
  }

>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
}
