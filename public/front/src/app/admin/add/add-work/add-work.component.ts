import { Component, OnInit } from '@angular/core';
import {Work} from "../../../../shared/models/work";
import {WorkService} from "../../../../shared/services/work.service";

@Component({
  selector: 'app-add-work',
  templateUrl: './add-work.component.html',
  styleUrls: ['./add-work.component.css'],
  providers: [WorkService]
})
export class AddWorkComponent implements OnInit {

  constructor(private _workService:WorkService) { }

  ngOnInit() {
  }

  submit(form:HTMLFormElement){
    let data = new FormData(form);
    this._workService.add(data).subscribe(next=>{
      console.log(JSON.stringify(next));
      form.reset();
    }, error=>{
      console.error(error);
    });
  }

}
