import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DonationService {

  donationsUrl = 'http://localhost:3000';
  

  httpHeaders = new HttpHeaders().set('Content-Type', 'application/json');


  constructor(private http: HttpClient) { }

  addDonation(data:any){
    return this.http.post(this.donationsUrl + '/donations/addDonation/',data)
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );

  }
  getAllDonations(){ 

    return this.http.get<[]>(this.donationsUrl + '/donations/')
    .pipe(catchError((error: HttpErrorResponse) =>
    { return throwError(error.message || 'server error');    
          })
          
          );
  
    }


}
