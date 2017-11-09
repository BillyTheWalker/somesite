import {Component, OnInit} from "@angular/core";
import {WorkService} from "../../../shared/services/work.service";
import {Work} from "../../../shared/models/work";
import {ActivatedRoute} from "@angular/router";
import {Url} from "../../../shared/config/url";

@Component({
  selector: 'app-work-one-full',
  templateUrl: './work-one-full.component.html',
  styleUrls: ['./work-one-full.component.css'],
  providers: [WorkService]
})
export class WorkOneFullComponent implements OnInit {

  url: string = Url.url + "/restful/google-drive/download/";

  work: Work=new Work();

  constructor(private _workService: WorkService, private _activatedRoute: ActivatedRoute) {
    _activatedRoute.params.subscribe(next => {
      _workService.findOne(next["id"]).subscribe(next => {
        this.work = next;
      }, error => {
        console.error(error)
      });
    });
  }

  ngOnInit() {
  }

}
