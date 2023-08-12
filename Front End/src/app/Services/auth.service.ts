import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedInUserName: string | undefined;
  


  private baseUrl: string = "https://localhost:7205/api/Auth/"
  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }
  logout(){
    this.loggedIn =false;
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
