import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-research-book-side-bar',
  templateUrl: './research-book-side-bar.component.html',
  styleUrls: ['./research-book-side-bar.component.css']
})
export class ResearchBookSideBarComponent {

  constructor( public auth: AuthService, private router : Router){}
  logout() {
    // Call the logout method from AuthService
    this.auth.logout();

    // Redirect to the login or home page
    this.router.navigate(['/signin']); // Replace 'login' with your login page route
  }
}
