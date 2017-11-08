/**
 * Created by danul on 03.11.2017.
 */
import {Injectable} from "@angular/core";
import {ConnectionBackend, Headers, Http, Request, RequestOptions, RequestOptionsArgs, Response} from "@angular/http";
import {Router} from "@angular/router";
import {Observable} from "rxjs";
import {CookieService} from "angular2-cookie/core";
import {isNullOrUndefined} from "util";
import {AppComponent} from "../../app/app.component";
import {Url} from "../config/url";


@Injectable()
export class HttpClient extends Http {

  private tokenName: string = "access_token";
  private _cookieService: CookieService = new CookieService();

  constructor(backend: ConnectionBackend, defaultOptions: RequestOptions, private _router: Router) {
    super(backend, defaultOptions);
  }

  request(url: string | Request, options?: RequestOptionsArgs): Observable<Response> {
    return this.intercept(super.request(url, options));
  }


  get(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.getRequestOptionArgs(options);
    options.method = "GET";
    return this.intercept(super.get(url, options));
  }

  post(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.getRequestOptionArgs(options, url);
    options.method = "POST";
    return this.intercept(super.post(url, body, options));
  }

  put(url: string, body: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.getRequestOptionArgs(options);
    options.method = "PUT";
    return this.intercept(super.put(url, body, options));
  }

  delete(url: string, options?: RequestOptionsArgs): Observable<Response> {
    options = this.getRequestOptionArgs(options);
    options.method = "DELETE";
    return this.intercept(super.delete(url, options));
  }

  getRequestOptionArgs(options?: RequestOptionsArgs, url?: string): RequestOptionsArgs {
    if (options == null) {
      options = new RequestOptions();
    }
    if (options.headers == null) {
      options.headers = new Headers();
    }
    if ((this._cookieService.get(this.tokenName) != null) && (this._cookieService.get(this.tokenName) != "")) {

      if (AppComponent.userDetailsService.checkAuth()) {
        AppComponent.userDetailsService.updateTokenParseInLocalStorage();
      }

      if (options.headers.has("NotAuthorization")) {
        options.headers.delete('NotAuthorization');
      } else {
        if (!options.headers.has("Authorization")) {
          options.headers.delete('Authorization');
          options.headers.append('Authorization', 'Bearer ' + this._cookieService.get(this.tokenName));
        }
      }
    } else {
      if (options.headers.has("NotAuthorization")) {
        options.headers.delete('NotAuthorization');
      } else {
        if (options.headers.has("Multipart")) {
          options.headers.delete("Multipart");
        } else {
          options.headers.append('Authorization', 'Basic  Y2xpZW50YXBwOjEyMzQ1Ng==');
          if (!options.headers.has("Content-Type")) {
            options.headers.append('Content-Type', 'application/x-www-form-urlencoded');
          }
        }
      }
    }
    options.headers.append('Accept', 'application/json');
    return options;
  }

  intercept(observable: Observable<Response>): Observable<Response> {
    return observable.catch((err, source) => {
      if (err.status == 401) {
        this._cookieService.remove("access_token");
        console.log(this._cookieService.get("refresh_token"));
        if (isNullOrUndefined(this._cookieService.get("refresh_token"))) {
        } else {
          var data = 'refresh_token='
            + encodeURIComponent(this._cookieService.get("refresh_token")) + '&grant_type=refresh_token&client_id=' +
            encodeURIComponent("clientapp") + "&client_secret=" + encodeURIComponent("123456");
          this.post(Url.url + "/oauth/token", data).catch((error) => Observable.throw(error)).subscribe(
            next => {
              console.log(next);
              AppComponent.userDetailsService.tokenParseInLocalStorage(next);
            }, error => {
              console.error(error);
              this._router.navigate(['/login']);
            }
          );
          return this.intercept(observable.delay(1000).take(1));
        }
        return Observable.empty();
      } else {
        return Observable.throw(err);
      }
    });

  }
}
