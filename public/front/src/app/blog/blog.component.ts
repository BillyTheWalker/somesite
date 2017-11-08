import {Component, OnInit} from "@angular/core";
import {BlogService} from "../../shared/services/blog.service";
import {Blog} from "../../shared/models/blog";

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  providers: [BlogService]
})
export class BlogComponent implements OnInit {

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
