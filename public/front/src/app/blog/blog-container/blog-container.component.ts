import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../../shared/services/blog.service";
import {Blog} from "../../../shared/models/blog";

@Component({
  selector: 'app-blog-container',
  templateUrl: './blog-container.component.html',
  styleUrls: ['./blog-container.component.css'],
  providers: [BlogService]
})
export class BlogContainerComponent implements OnInit {
  blogs: Blog[] = [];

  constructor(private _blogService: BlogService) {
    _blogService.findAll().subscribe(next => {
      this.blogs = next;
    }, error => {
      console.error(error);
    });
  }

  ngOnInit() {
  }

}
