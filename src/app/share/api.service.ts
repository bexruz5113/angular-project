/* eslint-disable @typescript-eslint/naming-convention */
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Share } from '../share/share';



@Injectable({
  providedIn: 'root'
})
export class ApiService {

  apiURL: string = 'http://localhost:3000';

  // headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  // eslint-disable-next-line @typescript-eslint/member-ordering
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  // all get
  getUsers(): Observable<Share> {
    return this.http.get<Share>(this.apiURL + '/posts')
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }
  getTests(): Observable<any> {
    return this.http.get<any>(this.apiURL + '/question')
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }
  getTest(id): Observable<any> {
    return this.http.get<any>(this.apiURL + '/question/' + id)
      .pipe(retry(1),
        catchError(this.handleError)
      );
  }

  // id get
  getUser(id): Observable<Share> {
    return this.http.get<Share>(this.apiURL + '/posts/' + id)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // post request
  createUser(user): Observable<Share> {
    return this.http.post<Share>(this.apiURL + '/posts', JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  deleteUser(id) {
    return this.http.delete<Share>(this.apiURL + '/posts/' + id, this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // HttpClient API put() method => Update employee
  updateUser(id, user): Observable<Share> {
    return this.http.put<Share>(this.apiURL + '/posts/' +
      id, JSON.stringify(user), this.httpOptions)
      .pipe(
        retry(1),
        catchError(this.handleError)
      );
  }

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }
}
