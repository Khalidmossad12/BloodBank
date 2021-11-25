import { Component, OnInit } from '@angular/core';

declare var $:any;

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {


    let navOffset = $(".demo").offset().top
    $(window).scroll(function() {
      let Scroll = $(window).scrollTop()
      if (Scroll > navOffset + 50) {
        $("nav").css("backgroundColor" , "white ")
        $("a").css("color" , "#4a4a4a")
        $("i").css("color" , "#F65E68 ")
        $("h4").css("color" , "#F65E68")
        // $("a").hover(function() {
        //   $("a").css("color" , "#F65E68")
        // })
      }
      else{
        $("nav").css("backgroundColor" , "transparent")
        $("a").css("color" , "white")
        $(".logo").css("color" , "white")
        $("i").css("color" , "white")
        $("h4").css("color" , " white")
        // $("a").hover(function() {
        //   $("a").css("color" , "#FFFF")
        // })
      }
    })

  }

}
