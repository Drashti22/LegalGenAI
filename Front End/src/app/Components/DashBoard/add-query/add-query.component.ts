import { Component } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { DialogBoxComponent } from '../dialog-box/dialog-box.component';

@Component({
  selector: 'app-add-query',
  templateUrl: './add-query.component.html',
  styleUrls: ['./add-query.component.css']
})
export class AddQueryComponent {
  constructor(private dialog: MatDialog) { }
  
  openDialog(): void {
    const dialogConfig: MatDialogConfig = {backdropClass: 'backdropBackground'};
    this.dialog.open(DialogBoxComponent, dialogConfig);
  }
}
