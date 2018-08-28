import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class AppHttpService {

  constructor(private http: HttpClient) { }
  baseUrl: String = 'http://localhost:3000';
  const apiUrl = this.baseUrl + '/client';
  const httpOptions = {
    headers: new HttpHeaders({'Content-Type': 'application/json'});
  };

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }
  private extractData(res: Response) {
    const body = res;
    return body || { };
  }

  getAll(): Observable<any> {
    return this.http.get(this.apiUrl, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }
  getById(id: string): Observable<any> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.get(url, this.httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError));
  }

  insert(data): Observable<any> {
    return this.http.post(this.apiUrl, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  update(data): Observable<any> {
    return this.http.put(this.apiUrl, data, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }

  delete(id: string): Observable<{}> {
    const url = `${this.apiUrl}/${id}`;
    return this.http.delete(url, this.httpOptions)
      .pipe(
        catchError(this.handleError)
      );
  }



}
