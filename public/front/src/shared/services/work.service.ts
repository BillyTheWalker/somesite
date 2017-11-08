/**
 * Created by Kishka on 08.11.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Work} from "../models/work";

@Injectable()
export class WorkService {
  constructor(private _http: Http) {
  }

  findAll(): Observable<Work[]> {
    return this._http.get("/work/find-all").map(res => res.json()).catch(error => Observable.throw(error));
  }

  add(worker: FormData): Observable<Work> {
    return this._http.post("/work/add", worker).map(res => res.json()).catch(error => Observable.throw(error));
  }

  findOne(id: number): Observable<Work> {
    return this._http.get("/work/find-one/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete("/work/delete/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }
}
