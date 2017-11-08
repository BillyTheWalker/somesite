import {Component, OnInit} from "@angular/core";
import {WorkerService} from "../../../../shared/services/worker.service";
import {Worker} from "../../../../shared/models/worker";

@Component({
  selector: 'app-add-worker',
  templateUrl: './add-worker.component.html',
  styleUrls: ['./add-worker.component.css'],
  providers: [WorkerService]
})
export class AddWorkerComponent implements OnInit {

  constructor(private _workerService: WorkerService) {
  }

  ngOnInit() {
  }

  submit(form: HTMLFormElement) {
    let data = new FormData(form);
    this._workerService.add(data).subscribe(next => {
      console.log(JSON.stringify(next));
      form.reset();
    }, error => {
      console.error(error);
    });
  }

}
