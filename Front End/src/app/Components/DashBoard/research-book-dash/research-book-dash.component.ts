import { Component,  OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ResearchBookService } from 'src/app/Services/api-service.service';
import { ResearchBook } from 'src/app/Model/research-book';



@Component({
  selector: 'app-research-book-dash',
  templateUrl: './research-book-dash.component.html',
  styleUrls: ['./research-book-dash.component.css']
})
export class ResearchBookDashComponent implements OnInit {

  researchBooks: ResearchBook[] = [];

  constructor(private researchBookService: ResearchBookService) { }

  ngOnInit(): void {
    this.researchBookService.getResearchBooks()
      .subscribe((data) => {
        this.researchBooks = data;
      });
    
    this.researchBookService.researchBookCreated$
      .subscribe((newResearchBook) => {
        this.researchBooks.push(newResearchBook);
      });
  }

}
