/**
 * Created by Kishka on 08.11.2017.
 */
import {Injectable} from "@angular/core";
import {Http,Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Blog} from "../models/blog";
@Injectable()
export class BlogService{
  constructor(private _http:Http){}

  findAll(): Observable<Blog[]> {
    return this._http.get("/blog/find-all").map(res => res.json()).catch(error => Observable.throw(error));
  }

  add(worker: FormData): Observable<Blog> {
    return this._http.post("/blog/add?theme="+worker.get("theme")+"&description="+worker.get("description"), worker).map(res => res.json()).catch(error => Observable.throw(error));
  }

  findOne(id: number): Observable<Blog> {
    return this._http.get("/blog/find-one/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete("/blog/delete/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }
}
