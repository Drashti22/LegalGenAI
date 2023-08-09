import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResearchBookDashComponent } from './Components/DashBoard/research-book-dash/research-book-dash.component';
import { ResearchBookBoxComponent } from './Components/DashBoard/research-book-box/research-book-box.component';
import { AddQueryComponent } from './Components/DashBoard/add-query/add-query.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { DialogBoxComponent } from './Components/DashBoard/dialog-box/dialog-box.component';
import { MatDialogModule } from '@angular/material/dialog'
import { HttpClientModule } from '@angular/common/http';
import { ResearchBookSideBarComponent } from './Components/ResearchBook/research-book-side-bar/research-book-side-bar.component';
// import { ResearchBookComponent } from './Components/research-book/research-book.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchBookDashComponent,
    ResearchBookBoxComponent,
    AddQueryComponent,
    NavBarComponent,
    DialogBoxComponent,
    ResearchBookSideBarComponent,
    // ResearchBookComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
