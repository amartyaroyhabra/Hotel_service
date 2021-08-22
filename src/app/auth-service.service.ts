import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http:HttpClient) {
    login(data):Observable<any> {
      return this.http.post{"http://localhost:4200/hotel-service/login",data}
    }
 

   }
}
