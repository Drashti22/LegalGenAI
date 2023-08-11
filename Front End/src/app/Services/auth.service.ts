import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl: string = "https://localhost:7205/api/Auth/"
  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }


  //Authentication 
  loggedIn: boolean = false;
  login_valid(){
    this.loggedIn = true;
  }
  isAuthenticated(){
    return this.loggedIn
  }


}
