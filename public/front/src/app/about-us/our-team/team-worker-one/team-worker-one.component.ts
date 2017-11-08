import {Component, Input, OnInit} from "@angular/core";

@Component({
  selector: 'app-team-worker-one',
  templateUrl: './team-worker-one.component.html',
  styleUrls: ['./team-worker-one.component.css']
})
export class TeamWorkerOneComponent implements OnInit {

  @Input()
  worker: Worker;

  constructor() {
  }

  ngOnInit() {
  }

}
