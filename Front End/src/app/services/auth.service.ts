import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  private baseUrl: string = "https://localhost:44301/api/Auth/"
  constructor(private http: HttpClient) { }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`, userObj)
  }
  login(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  }


}