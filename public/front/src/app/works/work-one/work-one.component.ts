import {Component, Input, OnInit} from '@angular/core';
import {Work} from "../../../shared/models/work";
import {Url} from "../../../shared/config/url";

@Component({
  selector: 'app-work-one',
  templateUrl: './work-one.component.html',
  styleUrls: ['./work-one.component.css']
})
export class WorkOneComponent implements OnInit {
  url:string=Url.url+"/restful/google-drive/download/";

  @Input()
  work:Work;

  constructor() { }

  ngOnInit() {
  }

}
