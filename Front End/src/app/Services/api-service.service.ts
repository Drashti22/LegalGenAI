import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, tap } from 'rxjs';
import { ResearchBook } from '../Model/research-book';

@Injectable({
  providedIn: 'root'
})
export class ResearchBookService {

  private baseUrl = 'https://localhost:7205/api/'; // Replace with your backend URL

  private researchBookCreatedSubject = new Subject<ResearchBook>();

  researchBookCreated$ = this.researchBookCreatedSubject.asObservable();

  constructor(private http: HttpClient) { }

  getResearchBooks(): Observable<any> {
    return this.http.get(this.baseUrl + 'ResearchBooks');
  }

  // createResearchBook(researchBook: any): Observable<any> {
  //   return this.http.post(this.baseUrl + 'ResearchBooks', researchBook);
  // }
  createResearchBook(researchBook: any): Observable<any> {
    return this.http.post(this.baseUrl + 'ResearchBooks', researchBook)
      .pipe(
        tap((response: any) => {
          this.researchBookCreatedSubject.next(response); // Emit the created research book
        })
      );
  }
  

  // Add other methods for update, delete, etc.
}
