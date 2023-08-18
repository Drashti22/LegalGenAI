import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
    loggedInUserName: string | undefined;
  


  private baseUrl: string = "https://localhost:7205/api/Auth/"
  constructor(private http: HttpClient) { }

  // signUp(userObj:any){
  //   return this.http.post<any>(`${this.baseUrl}register`, userObj)
  // }
  // login(loginObj:any){
  //   return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj)
  // }

  
  
  
  signUp(userObj: any): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
    });
    return this.http.post<any>(`${this.baseUrl}register`, userObj, { headers });
  }

  login(loginObj: any): Observable<any> {
    const token = this.getAccessToken();
    const headers = new HttpHeaders({
      'Content-Type': 'application/json', 
      'Authorization': `Bearer ${token}`
    });

    // Make the POST request with headers
    return this.http.post<any>(`${this.baseUrl}authenticate`, loginObj, { headers });
  }


  logout(){
    this.loggedIn =false;
  }
  // getUserResearchBooks(userId: number): Observable<any>{
  //   const headers = new HttpHeaders({
  //     Authorization: `Bearer ${localStorage.getItem('accesstoken')}`
  //   });

  //   return  this.http.get<any>(`${this.baseUrl}${userId}/researchbooks`, {headers});
  // }

  getUserResearchBooks(userId: number): Observable<any> {
    const token = this.getAccessToken();
    if (token) {
      const headers = new HttpHeaders({
        Authorization: `Bearer ${token}`
      });

      return this.http.get<any>(`${this.baseUrl}${userId}/researchbooks`, { headers });
    } else {
      // Handle token not found (redirect to login or show error)
      throw new Error('Access token not found.');
    }
  }

  getAccessToken(): string | null {
    return localStorage.getItem('accessToken');
  }
  setAccessToken(token: string): void {
    localStorage.setItem('accessToken', token);
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
