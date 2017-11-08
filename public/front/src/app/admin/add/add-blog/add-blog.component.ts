import {Component, ElementRef, OnInit, ViewChild} from "@angular/core";
import {Blog} from "../../../../shared/models/blog";
import {BlogService} from "../../../../shared/services/blog.service";
import {ParagraphService} from "../../../../shared/services/paragraph.service";

@Component({
  selector: 'app-add-blog',
  templateUrl: './add-blog.component.html',
  styleUrls: ['./add-blog.component.css'],
  providers: [BlogService, ParagraphService]
})
export class AddBlogComponent implements OnInit {

  parForms:FormData[]=[];
  @ViewChild("parForm") parFormVC:ElementRef;
  @ViewChild("blogForm") blogFormVC:ElementRef;

  constructor(private _blogService: BlogService, private _paragraphService: ParagraphService) {
  }

  ngOnInit() {
  }

  submitParagraph(){
    this.parForms.push(new FormData(this.parFormVC.nativeElement));
    this.parFormVC.nativeElement.reset();
  }

  submit(){
    let data = new FormData(this.blogFormVC.nativeElement);
    this._blogService.add(data).subscribe(next=>{
      console.log(JSON.stringify(next));
      this.parFormVC.nativeElement.reset();
      for(let one of this.parForms){
        one.append("idBlog",next.id+'');
        this._paragraphService.add(one).subscribe(next=>{
          console.log(JSON.stringify(next));
        },error=>{
          console.error(error);
        });
      }
    },error=>{
      console.error(error);
    });
  }

}
