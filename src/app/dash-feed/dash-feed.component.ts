import { Component, OnInit } from '@angular/core';
<<<<<<< HEAD

=======
declare var $:any;
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
@Component({
  selector: 'app-dash-feed',
  templateUrl: './dash-feed.component.html',
  styleUrls: ['./dash-feed.component.css']
})
export class DashFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
<<<<<<< HEAD
  }

=======
   
  }
  Toggle(){
    $('button').next('.nav-collapse').slideToggle(200);
  }
  Comment_And_Close(){
    $('.list_of_comments').fadeToggle(200);
  }
  Share_And_Close(){
    $('.share').fadeToggle(200);
  }
  likes_And_Close(){
    $('.likes').fadeToggle(200);
    // $('#emoj').html($('.likes .emojs').html());
  }
>>>>>>> 27c3045274e5b17b1c0994e8ad85e4e3a4f2c994
}
