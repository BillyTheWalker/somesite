import { Component, OnInit } from '@angular/core';
import {GetInTouchServise} from "../../../shared/services/get-in-touch.service";

@Component({
  selector: 'app-get-in-touch-source',
  templateUrl: './get-in-touch-source.component.html',
  styleUrls: ['./get-in-touch-source.component.css'],
  providers: [GetInTouchServise]
})
export class GetInTouchSourceComponent implements OnInit {

  constructor(private _getInTouchService:GetInTouchServise) { }

  send(getInTouch:HTMLFormElement){
    event.preventDefault();
    this._getInTouchService.add(new FormData(getInTouch)).subscribe(next=>(getInTouch.reset()),error=>console.error(error));
  }

  ngOnInit() {
  }

}
