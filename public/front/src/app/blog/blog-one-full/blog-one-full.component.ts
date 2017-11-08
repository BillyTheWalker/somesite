import {Component, OnInit} from "@angular/core";
import {Blog} from "../../../shared/models/blog";
import {ActivatedRoute} from "@angular/router";
import {BlogService} from "../../../shared/services/blog.service";

@Component({
  selector: 'app-blog-one-full',
  templateUrl: './blog-one-full.component.html',
  styleUrls: ['./blog-one-full.component.css'],
  providers: [BlogService]
})
export class BlogOneFullComponent implements OnInit {

  blog: Blog = new Blog();

  constructor(private _activatedRoute: ActivatedRoute, private _blogService: BlogService) {
    _activatedRoute.params.subscribe(next => {
      _blogService.findOne(next["id"]).subscribe(next => {
        this.blog = next;
      }, error => {
        console.error(error);
      });
    });
  }

  ngOnInit() {
  }

}
