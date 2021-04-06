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

  donationTypeUrl = 'http://localhost:3000/donationTypes/';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }


  getDonationsType():Observable<DonationTypeModel[]> { 

    return this.http.get<DonationTypeModel[]>(this.donationTypeUrl)
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }// End Function

     //donationType/id
  get(id: any): Observable<any> {
    let Url = `${this.donationTypeUrl}${id}`;
    return this.http.get(Url, {headers: this.httpHeaders})
     .pipe(map((res: any) => {
       return res || {}
     }),
     catchError(this.errorHandler)
     )
  }
  
 addEvent(data: DonationTypeModel):Observable<any>{
   let URL = `${this.donationTypeUrl  + '/addDonType'}`;
   return this.http.post(URL, data)
   .pipe(
     catchError(this.errorHandler)
   )
 }

 
 updateEvent(id:any, data:any): Observable<any> {
   let URL = `${this.donationTypeUrl}${id}`;
   return this.http.put(URL, data, {headers: this.httpHeaders} )
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