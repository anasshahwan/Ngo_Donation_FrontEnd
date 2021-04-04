
import { catchError, map} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { Injectable } from '@angular/core';
import { UserModelForAllData, UserModelForUpdate } from 'src/app/Models/UserModel';
import { AuthModelForAllData } from 'src/app/Models/AuthModel';
import { Observable, throwError } from 'rxjs'
import { Roles } from 'src/app/Models/RolesModel';
@Injectable({
  providedIn: 'root'
})
export class RolesService {

  authUrl = 'http://localhost:3000';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }


  getAllRoles():Observable<Roles[]> { 

    return this.http.get<Roles[]>(this.authUrl + '/roles/')
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }// End Function

}