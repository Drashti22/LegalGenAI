import { Component , OnInit} from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit{
  constructor(public auth: AuthService, private router : Router) { }

  logout() {
    // Call the logout method from AuthService
    this.auth.logout();

    // Redirect to the login or home page
    this.router.navigate(['/signin']); // Replace 'login' with your login page route
  }

  showDropdown : boolean = false;
  toggleDropdown() {
    this.showDropdown = !this.showDropdown;
  }
  
  ngOnInit(): void {

  }
}
