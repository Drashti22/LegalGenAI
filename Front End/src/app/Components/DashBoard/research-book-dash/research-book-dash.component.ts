import { Component,  OnDestroy, ChangeDetectorRef, OnInit } from '@angular/core';
import { ResearchBookService } from 'src/app/Services/api-service.service';
import { ResearchBook } from 'src/app/Model/research-book';
import { AuthService } from 'src/app/Services/auth.service';



@Component({
  selector: 'app-research-book-dash',
  templateUrl: './research-book-dash.component.html',
  styleUrls: ['./research-book-dash.component.css']
})
export class ResearchBookDashComponent implements OnInit {

  allResearchBooks: any[] = [];
  userResearchBooks: any[] =[];

  constructor(private researchBookService: ResearchBookService, private authService: AuthService) { }

  ngOnInit(): void {
    // this.researchBookService.getResearchBooks()
    //   .subscribe((data) => {
    //     this.allResearchBooks = data;
    //     console.log("All data" , data)
    //   });
    
    this.researchBookService.researchBookCreated$
      .subscribe((newResearchBook) => {
        this.allResearchBooks.push(newResearchBook);
      });

      const userId = 1;
      this.authService.getUserResearchBooks(userId).subscribe(
        (data)=>{
          this.userResearchBooks = data;
          console.log(" User Data ",data);
        }, 
        (error)=>{
          console.error('Error fetching research books:', error);
        }

      )
  }

}
