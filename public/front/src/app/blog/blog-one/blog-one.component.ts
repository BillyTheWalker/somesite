import {Component, Input, OnInit} from "@angular/core";
import {Blog} from "../../../shared/models/blog";
import {Url} from "../../../shared/config/url";

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {
  url:string=Url.url+"/restful/google-drive/download/";
  @Input()
  blog: Blog;

  constructor() {
  }

  ngOnInit() {
  }

}
