import {AfterViewInit, Component, Input, OnInit} from "@angular/core";
import {Url} from "../../../../shared/config/url";
import {Worker} from "../../../../shared/models/worker";
@Component({
  selector: 'app-team-worker-one',
  templateUrl: './team-worker-one.component.html',
  styleUrls: ['./team-worker-one.component.css']
})
export class TeamWorkerOneComponent implements OnInit, AfterViewInit {
  url: string = Url.url + "/restful/google-drive/download/";
  photo1: string = "block";
  photo2: string = "none";
  @Input()
  worker: Worker;

  constructor() {


  }

  mouseOut() {
    this.photo1 = "block";
    this.photo2 = "none";
  }

  mouseOver() {
    this.photo1 = "none";
    this.photo2 = "block";
  }

  ngOnInit() {
  }

  ngAfterViewInit(): void {
  }
}
