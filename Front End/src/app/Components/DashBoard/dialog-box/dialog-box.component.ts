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

  constructor(private dialog: MatDialog, private researchBookService: ResearchBookService, private router:Router) {
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }

  newBook(): void {
    const value = this.bookForm.get('bookname')?.value;
    const userId = 2
    console.log(value)
    

    const newResearchBook : any = {
      name: value,
      userId: userId,
      dateCreated: new Date(),
      lastModified: new Date()
    };

    this.researchBookService.createResearchBook(newResearchBook)
      .subscribe(
        response => {
          console.log('New research book created:', response);
        },
      );

    this.router.navigate(['/researchbook'])
    this.dialog.closeAll();
  }
}
  

