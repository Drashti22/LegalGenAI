import { Component, EventEmitter, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ResearchBookService } from 'src/app/Services/api-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dialog-box',
  templateUrl: './dialog-box.component.html',
  styleUrls: ['./dialog-box.component.css']
})
export class DialogBoxComponent {

  bookForm = new FormGroup({
    bookname: new FormControl()
  });

  constructor(private dialog: MatDialog, private researchBookService: ResearchBookService, private router: Router) {
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  newBook(): void {
    const value = this.bookForm.get('bookname')?.value;
    const userId = 1
    console.log(value)


    const researchBook: any = {

      name: value,
      userId: 1,

    };

  

    this.researchBookService.createResearchBook(researchBook)
      .subscribe({
        next: response => {
          console.log('New research book created:', response);

          // Navigation and dialog closing should be done inside the subscription
          this.router.navigate(['/researchbook']);
          // this.dialog.closeAll();
        },
        error: error => {
          console.error('Error creating research book:', error);
        }
      });

    // This line will execute before the subscription callback
    console.log("From Front End:" + researchBook.name, researchBook.userId);
    this.dialog.closeAll();
  }
}



