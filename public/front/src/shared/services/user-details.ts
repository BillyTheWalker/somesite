/**
 * Created by danul on 03.11.2017.
 */
import {Subject} from "rxjs/Subject";
import {CookieService} from "angular2-cookie/services";
import {isNullOrUndefined} from "util";
import {AppComponent} from "../../app/app.component";
import {CookieOptions} from "angular2-cookie/core";
import {User} from "../models/user";

export class UserDetailsService {


  public user: User = new User();
  private _user = new Subject<User>();
  user$ = this._user.asObservable();

  public isAuth: boolean = false;
  private _isAuth = new Subject<boolean>();
  isAuth$ = this._isAuth.asObservable();

  public isAdmin: boolean = false;
  private _isAdmin = new Subject<boolean>();
  isAdmin$ = this._isAdmin.asObservable();

  constructor(private _cookieService: CookieService = new CookieService()) {

  }




  public login(user: User) {
    this.user = user;
    this._user.next(this.user);
    this.isAuth = true;
    this._isAuth.next(this.isAuth);
    this.isAdmin = user.role.toUpperCase() == "ADMIN";
    this._isAdmin.next(this.isAdmin);
  }

  public logout() {
    this.user = new User();
    this.user.role = "no_access_token";
    this._user.next(this.user);
    this.isAuth = false;
    this._isAuth.next(this.isAuth);
    this._cookieService.remove("access_token");
    if(!isNullOrUndefined(localStorage.getItem("ADMIN")))
      localStorage.removeItem("ADMIN");
    this.isAdmin = false;
    this._isAdmin.next(this.isAdmin);
  }

  checkAuth(): boolean {
    return (!isNullOrUndefined(this._cookieService.get("access_token")));
  }

  tokenParseInLocalStorage(data: any) {
    let date = new Date();
    date.setSeconds(data.expires_in);
    let conf = new CookieOptions({expires: date});
    this._cookieService.remove("access_token");
    this._cookieService.remove("token_type");
    this._cookieService.remove("expires_in");
    this._cookieService.remove("scope");
    this._cookieService.remove("jti");
    this._cookieService.remove("refresh_token");

    this._cookieService.put("access_token", data.access_token);
    this._cookieService.put("token_type", data.token_type);
    this._cookieService.put("expires_in", new Date().setSeconds(data.expires_in) + "");
    this._cookieService.put("scope", data.scope);
    this._cookieService.put("jti", data.jti);
    this._cookieService.put("refresh_token", data.refresh_token);
  }
  updateTokenParseInLocalStorage(){


  }


}
