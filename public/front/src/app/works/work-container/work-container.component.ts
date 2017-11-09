import { Component, OnInit } from '@angular/core';
import {WorkService} from "../../../shared/services/work.service";
import {Work} from "../../../shared/models/work";
import {Utils} from "../../../shared/utils/utils";

@Component({
  selector: 'app-work-container',
  templateUrl: './work-container.component.html',
  styleUrls: ['./work-container.component.css'],
  providers: [WorkService]
})
export class WorkContainerComponent implements OnInit {

  works: Work[] = [];

  constructor(private _workService: WorkService) {
    // this.works = this.test();
    _workService.findAll().subscribe(next => {
      this.works = next;
    }, error => {
      console.error(error)
    });
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
