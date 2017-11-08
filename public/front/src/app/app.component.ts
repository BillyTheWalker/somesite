import { Component } from '@angular/core';
import {UserDetailsService} from "../shared/services/user-details";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  public static userDetailsService: UserDetailsService;
}
