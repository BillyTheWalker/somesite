/**
 * Created by Kishka on 09.11.2017.
 */
import {DomSanitizer} from "@angular/platform-browser";
import {Pipe, PipeTransform} from "@angular/core";
/**
 * Created by Kishka on 06.11.2017.
 */
@Pipe({name: 'safeHtml'})
export class Safe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {
  }

  transform(style) {
    // return this.sanitizer.sanitize(SecurityContext.HTML, style) ;
    return this.sanitizer.bypassSecurityTrustHtml(style);
    // return this.sanitizer.bypassSecurityTrustXxx(style); - see docs
  }
}
