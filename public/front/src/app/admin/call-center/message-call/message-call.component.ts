import { Component, OnInit } from '@angular/core';
import {GetInTouch} from "../../../../shared/models/get-in-touch";
import {GetInTouchServise} from "../../../../shared/services/get-in-touch.service";

@Component({
  selector: 'app-message-call',
  templateUrl: './message-call.component.html',
  styleUrls: ['./message-call.component.css'],
  providers: [GetInTouchServise]
})
export class MessageCallComponent implements OnInit {
  private messages:GetInTouch[]=[];

  constructor(private _getInTouchService:GetInTouchServise) {
    _getInTouchService.findAll().subscribe(next=>{this.messages=next;console.log(next);},error=>{console.error(error)});
  }

  ngOnInit() {
  }

}
