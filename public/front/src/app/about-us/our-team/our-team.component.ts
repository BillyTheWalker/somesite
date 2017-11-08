import {Component, OnInit} from "@angular/core";
import {Worker} from "../../../shared/models/worker";
import {WorkerService} from "../../../shared/services/worker.service";
import {Utils} from "../../../shared/utils/utils";

@Component({
  selector: 'app-our-team',
  templateUrl: './our-team.component.html',
  styleUrls: ['./our-team.component.css'],
  providers: [WorkerService]
})
export class OurTeamComponent implements OnInit {

  workers: Worker[] = [];

  constructor(private _workerService: WorkerService) {

    // _workerService.findAll().subscribe(next=>{
    //   this.workers = next;
    // });

    this.workers = this.test();

  }

  ngOnInit() {
  }

  test():Worker[]{
    let workers:Worker[] = [];
    for(let i=0; i<10;i++){
      let worker = new Worker();
      worker.name = Utils.randomString();
      worker.position = Utils.randomString();
      workers.push(worker);
    }
    return workers;
  }

}
