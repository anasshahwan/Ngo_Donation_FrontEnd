import { catchError} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UserModelForAllData } from 'src/app/Models/UserModel';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  authUrl = 'http://localhost:3000/users/'

  constructor(private http: HttpClient) { }

  getAllUsers():Observable<UserModelForAllData[]> { 

    return this.http.get<UserModelForAllData[]>(this.authUrl)
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }// End Function 

}
