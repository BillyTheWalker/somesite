/**
 * Created by Kishka on 08.11.2017.
 */
import {Injectable} from "@angular/core";
import {Observable} from "rxjs/Observable";
import {Worker} from "../models/worker";
import {Http} from "@angular/http";

@Injectable()
export class WorkerService {

  constructor(private _http: Http) {
  }

  findAll(): Observable<Worker[]> {
    return this._http.get("/worker/find-all").map(res => res.json()).catch(error => Observable.throw(error));
  }

  add(work: FormData): Observable<Worker> {
    return this._http.post("/worker/add", work).map(res => res.json()).catch(error => Observable.throw(error));
  }

  findOne(id: number): Observable<Worker> {
    return this._http.get("/worker/find-one/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete("/worker/delete/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

}
