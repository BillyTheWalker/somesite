import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-get-in-touch-source',
  templateUrl: './get-in-touch-source.component.html',
  styleUrls: ['./get-in-touch-source.component.css']
})
export class GetInTouchSourceComponent implements OnInit {

  constructor() { }

  send(){
    event.preventDefault();
  }

  ngOnInit() {
  }

}
