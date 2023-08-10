import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchBookDashComponent } from './Components/DashBoard/research-book-dash/research-book-dash.component';
import { ResearchBookComponent } from './Components/ResearchBook/research-book/research-book.component';
import { WelcomeComponent } from './Components/SignIn/welcome/welcome.component';
import { RegisterComponent } from './Components/SignIn/register/register.component';
import { LoginComponent } from './Components/SignIn/login/login.component';

const routes: Routes = [
  { path: "researchbookdash" , component: ResearchBookDashComponent},
  { path: "researchbook", component: ResearchBookComponent},
  {path: '' , component: WelcomeComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'register' , component: RegisterComponent},
  {path: 'signin' , component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
