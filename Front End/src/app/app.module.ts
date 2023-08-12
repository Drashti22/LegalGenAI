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
import { MatDialogModule } from '@angular/material/dialog';
import { SearchComponent } from './Components/ResearchBook/search/search.component';
import { HttpClientModule } from '@angular/common/http';
import { ResearchBookSideBarComponent } from './Components/ResearchBook/research-book-side-bar/research-book-side-bar.component';
import { ResearchBookComponent } from './Components/ResearchBook/research-book/research-book.component';
import { SearchResultComponent } from './Components/ResearchBook/search-result/search-result.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { WelcomeComponent } from './Components/SignIn/welcome/welcome.component';
import { RegisterComponent } from './Components/SignIn/register/register.component';
import { LoginComponent } from './Components/SignIn/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    ResearchBookDashComponent,
    ResearchBookBoxComponent,
    AddQueryComponent,
    NavBarComponent,
    DialogBoxComponent,
    ResearchBookSideBarComponent,
    ResearchBookComponent,
    SearchComponent,
    SearchResultComponent,
    LoginComponent,
    RegisterComponent,
    WelcomeComponent

    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
