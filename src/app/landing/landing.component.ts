import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  register():void{
    window.location.href='./register'
  }
  question():void{
    window.location.href="./quiz";
  }

}
