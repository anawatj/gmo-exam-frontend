import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import { RergisterModel } from "src/models/register.model";
@Injectable({
    providedIn: 'root',
})
export class UserService {
    baseUrl = "http://localhost:8080";
    constructor(private http: HttpClient) {}
    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

    register(register:RergisterModel) :Observable<any>{
        return this.http.post(this.baseUrl+"/api/register",register,this.httpOptions).pipe(retry(1),catchError(this.handleError));
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