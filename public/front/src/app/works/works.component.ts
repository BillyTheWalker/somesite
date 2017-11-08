import {Component, OnInit} from "@angular/core";
import {Utils} from "../../shared/utils/utils";
import {Work} from "../../shared/models/work";
import {WorkService} from "../../shared/services/work.service";

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
  providers: [WorkService]
})
export class WorksComponent implements OnInit {

  works: Work[] = [];

  constructor(private _workService: WorkService) {
    this.works = this.test();
  }

  ngOnInit() {
  }

  test(): Work[] {
    let workers: Work[] = [];
    for (let i = 0; i < 10; i++) {
      let worker = new Work();
      worker.name = Utils.randomString();
      worker.description = Utils.randomString() + Utils.randomString() + Utils.randomString() + Utils.randomString();
      workers.push(worker);
    }
    return workers;
  }
}
