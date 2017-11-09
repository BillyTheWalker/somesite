import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../shared/services/blog.service";
import {Blog} from "../../shared/models/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
})
export class BlogComponent implements OnInit {



  ngOnInit() {
  }

}
