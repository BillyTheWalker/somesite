/**
 * Created by Anatoliy on 09.11.2017.
 */
import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Observable} from "rxjs";
import {GetInTouch} from "../models/get-in-touch";
@Injectable()
export class GetInTouchServise{
  constructor(private _http:Http){}

  add(getInTouch:FormData): Observable<GetInTouch>  {
    console.log("message= "+getInTouch.get("message"));
    console.log("name= "+getInTouch.get("name"));
    console.log("company name= "+getInTouch.get("companyName"));
    console.log("phone number"+getInTouch.get("phoneNumber"));
    return this._http.post("/getInTouch/add?name="+getInTouch.get("name")+"&companyName="+getInTouch.get("companyName")
      +"&email="+getInTouch.get("email")+"&message="+getInTouch.get("message")
      +"&phoneNumber="+getInTouch.get("phoneNumber"),new FormData())
      .map(res=> res.json()).catch(error => Observable.throw(error));
  }

  findOne(id:number): Observable<GetInTouch> {
    return this._http.get("/getInTouch/findOne/"+id).map(res=>res.json()).catch(error => Observable.throw(error));
  }

  delete(id:number): Observable<GetInTouch> {
    return this._http.delete("/getInTouch/findOne/"+id).map(res=>res.json()).catch(error => Observable.throw(error));
  }

  findAll() : Observable<GetInTouch> {
    return this._http.get("/getInTouch/findAll").map(res=>res.json()).catch(error => Observable.throw(error));
  }

  changeStatus(status:string,id:number): Observable<GetInTouch> {
    let formData = new FormData();
    formData.append("status",status)
    return this._http.get("/getInTouch/changeStatus/" + id,formData).map(res => res.json()).catch(error => Observable.throw(error));
  }
}
