import { Injectable } from "@angular/core";
import { HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { HttpClient } from '@angular/common/http';
import { Observable,throwError  } from "rxjs";
import { retry, catchError } from 'rxjs/operators';
import {  ContinuequizModel } from "src/models/continuequiz.model";
import { UserQuestionModel } from "src/models/userQuestion.model";
@Injectable({
    providedIn: 'root',
})
export class QuestionService {
    baseUrl = "http://localhost:8080";
    constructor(private http: HttpClient) {}
    // Http Headers
    httpOptions = {
        headers: new HttpHeaders({
          'Content-Type': 'application/json',
        }),
      };

    getQuestion() :Observable<any>{
        return this.http.get(this.baseUrl+"/api/quiz").pipe(retry(1),catchError(this.handleError));
    }
    loadSaveQuiz(quiz:ContinuequizModel):Observable<any>{
       return this.http.post(this.baseUrl+"/api/load",quiz,this.httpOptions).pipe(retry(1),catchError(this.handleError));
    }
    saveQuiz(userQuestion:UserQuestionModel[]):Observable<any>{
      return this.http.post(this.baseUrl+"/api/save",userQuestion,this.httpOptions).pipe(retry(1),catchError(this.handleError));
    }
    submitQuiz(userQuestion:UserQuestionModel[]):Observable<any>{
      return this.http.post(this.baseUrl+"/api/submit",userQuestion,this.httpOptions).pipe(retry(1),catchError(this.handleError));
    }

    summaryQuiz(quiz:ContinuequizModel):Observable<any>{
      return this.http.post(this.baseUrl+"/api/summary",quiz,this.httpOptions).pipe(retry(1),catchError(this.handleError));
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