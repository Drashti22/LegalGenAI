import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResearchBookDashComponent } from './Components/DashBoard/research-book-dash/research-book-dash.component';

const routes: Routes = [{
  path: "researchbookdash" , component: ResearchBookDashComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
