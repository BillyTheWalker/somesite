import {Component, Input, OnInit} from '@angular/core';
import {GetInTouch} from "../../../../../shared/models/get-in-touch";

@Component({
  selector: 'app-message-one',
  templateUrl: './message-one.component.html',
  styleUrls: ['./message-one.component.css']
})
export class MessageOneComponent implements OnInit {


  @Input() message:GetInTouch;
  constructor() { }

  ngOnInit() {
  }

}
