import { catchError, map} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UserModelForAllData } from 'src/app/Models/UserModel';
import { AuthModelForAllData } from 'src/app/Models/AuthModel';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUrl = 'http://localhost:3000';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<UserModelForAllData[]> { 

    return this.http.get<UserModelForAllData[]>(this.authUrl + '/users/')
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }// End Function 


    get(id: any): Observable<any> {
      let authUrl = `${this.authUrl}/users/${id}`;
      return this.http.get(authUrl, {headers: this.httpHeaders})
        .pipe(map((res:any) => {
          return res || {}
        }),
        catchError(this.errorHandler)
        )
    }

    addUser(data: AuthModelForAllData ):Observable<any>{
      let authUrl = `${this.authUrl + '/auth/register'}`;
      return this.http.post(authUrl, data)
      .pipe(
        catchError(this.errorHandler)
      )
      
    }

    
    deleteUser(id:any): Observable<any> {
      let authUrl = `${this.authUrl}/users/${id}`;
      return this.http.delete(authUrl, {headers: this.httpHeaders})
      .pipe(
        catchError(this.errorHandler)
      )
    }
  
    updateUser(id:any, data:any): Observable<any> {
      let URL = `${this.authUrl}/users/${id}`;
      return this.http.put(URL, data, {headers: this.httpHeaders})
         .pipe(
           catchError(this.errorHandler)
         )
    }
  

    errorHandler(error:HttpErrorResponse){
      let errMsg = '';
      if (error.error instanceof ErrorEvent){
        errMsg = error.error.message;
      }
      else{
        errMsg = `Error Code: ${error.status}\nMessage: ${error.message}`;
      }
      console.log(errMsg);
      return throwError(errMsg);
    }

}
