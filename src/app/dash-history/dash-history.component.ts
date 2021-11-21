import { Component, OnInit } from '@angular/core';
declare var $:any;
@Component({
  selector: 'app-dash-history',
  templateUrl: './dash-history.component.html',
  styleUrls: ['./dash-history.component.css']
})
export class DashHistoryComponent implements OnInit {

  constructor() { }
  Toggle(){
    $('button').next('.nav-collapse').slideToggle(200);
  }

  ngOnInit(): void {
  }

}
