import { Injectable } from '@angular/core';


import { catchError, map} from 'rxjs/operators'
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http'
import { UserModelForAllData, UserModelForUpdate } from 'src/app/Models/UserModel';
import { AuthModelForAllData } from 'src/app/Models/AuthModel';
import { Observable, throwError } from 'rxjs'
import { Roles } from 'src/app/Models/RolesModel';
import { DonationTypeModel } from 'src/app/Models/DonationTypeModel';
@Injectable({
  providedIn: 'root'
})
export class DonationTypeService {

  donationTypeUrl = 'http://localhost:3000';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }


  getDonationsType():Observable<DonationTypeModel[]> { 

    return this.http.get<DonationTypeModel[]>(this.donationTypeUrl + '/donationTypes/')
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }// End Function

}