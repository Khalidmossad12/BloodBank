import { Component, OnInit } from '@angular/core';
declare var $:any;

@Component({
  selector: 'app-dash-feed',
  templateUrl: './dash-feed.component.html',
  styleUrls: ['./dash-feed.component.css']
})
export class DashFeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
  }

   
