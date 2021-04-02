import { Injectable } from '@angular/core';
import { catchError, tap } from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { AuthModelForAllData, AuthModelForLogin } from '../../Models/AuthModel';

import { Observable, Subject , throwError } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'http://localhost:3000/auth/'

  constructor(private http: HttpClient) { }
  

  login(user:AuthModelForLogin): Observable<AuthModelForAllData> {
     const url = `${this.authUrl}login/`;
    return this.http.post<AuthModelForAllData>(url, user).pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error || 'server error');    
          })
          
          );

  }

}
