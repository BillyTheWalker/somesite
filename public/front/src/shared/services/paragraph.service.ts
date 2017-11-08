/**
 * Created by Kishka on 08.11.2017.
 */
import {Injectable} from "@angular/core";
import {Headers, Http, RequestOptions} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {Paragraph} from "../models/paragraph";
@Injectable()
export class ParagraphService {
  constructor(private _http: Http) {
  }

  findAll(): Observable<Paragraph[]> {
    return this._http.get("/paragraph/find-all").map(res => res.json()).catch(error => Observable.throw(error));
  }

  add(worker: FormData): Observable<Paragraph> {
    let options = new RequestOptions();
    options.headers = new Headers({"Multipart": "Multipart"});
    return this._http.post("/paragraph/add?description="+worker.get("description"), worker,options).map(res => res.json()).catch(error => Observable.throw(error));
  }

  findOne(id: number): Observable<Paragraph> {
    return this._http.get("/paragraph/find-one/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }

  delete(id: number): Observable<boolean> {
    return this._http.delete("/paragraph/delete/" + id).map(res => res.json()).catch(error => Observable.throw(error));
  }
}
