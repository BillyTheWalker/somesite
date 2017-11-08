import {Component, Input, OnInit} from '@angular/core';
import {Work} from "../../../shared/models/work";

@Component({
  selector: 'app-work-one',
  templateUrl: './work-one.component.html',
  styleUrls: ['./work-one.component.css']
})
export class WorkOneComponent implements OnInit {

  @Input()
  work:Work;

  constructor() { }

  ngOnInit() {
  }

}
