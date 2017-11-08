/**
 * Created by Kishka on 08.11.2017.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
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
    let options = new RequestOptions();
    options.headers = new Headers({"Multipart": "Multipart"});
    return this._http.post("/work/add", worker, options).map(res => res.json()).catch(error => Observable.throw(error));
  }

  findOne(id: number): Observable<Work> {
    return this._http.get("/work/find-one/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete("/work/delete/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }
}
