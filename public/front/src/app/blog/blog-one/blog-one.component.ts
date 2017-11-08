import {Component, Input, OnInit} from "@angular/core";
import {Blog} from "../../../shared/models/blog";

@Component({
  selector: 'app-blog-one',
  templateUrl: './blog-one.component.html',
  styleUrls: ['./blog-one.component.css']
})
export class BlogOneComponent implements OnInit {

  @Input()
  blog: Blog;

  constructor() {
  }

  ngOnInit() {
  }

}
