/**
 * Created by Kishka on 09.11.2017.
 */
import { NgModule } from '@angular/core';
import {CommonModule} from "@angular/common";
import {Safe} from "./safeHtml.pipe";


@NgModule({
  declarations:[Safe],
  imports:[CommonModule],
  exports:[Safe]
})

export class SafeHtmlModule{}
