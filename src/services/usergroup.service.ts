import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
@Injectable({
    providedIn: 'root',
})
export class UserGroupService {
    baseUrl = "http://localhost:8080";
    constructor(private http: HttpClient) {}
    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

    GetUserGroup() :Observable<any>{
        return this.http.get(this.baseUrl+"/api/usergroup").pipe(retry(1),catchError(this.handleError));
    }

    private handleError(error: HttpErrorResponse): any {
        if (error.error instanceof ErrorEvent) {
          console.error('An error occurred:', error.error.message);
        } else {
          console.error(
            `Backend returned code ${error.status}, ` +
            `body was: ${error.error}`);
        }
        return throwError(
          'Something bad happened; please try again later.');
      }

  
}