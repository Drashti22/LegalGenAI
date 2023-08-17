import { Component, Input, OnInit } from '@angular/core';
import { ResearchBook } from 'src/app/Model/research-book';
import { ResearchBookService } from 'src/app/Services/api-service.service';

@Component({
  selector: 'app-research-book-box',
  templateUrl: './research-book-box.component.html',
  styleUrls: ['./research-book-box.component.css']
})



export class ResearchBookBoxComponent {

  researchBooks: ResearchBook[] = [];
  constructor() { }

  @Input() book: any;
  
}
