import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule, 
    RouterOutlet, 
    MenuComponent, 
    HttpClientModule,
    FormsModule
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'jiffy';

  constructor(private auth: AuthService) {}
  

  ngOnInit() {
    // Log the authentication status
    this.auth.isAuthenticated$.subscribe(isAuthenticated => {
      console.log('User authenticated:', isAuthenticated);
    });

    // Log the user data
    this.auth.user$.subscribe(user => {
      console.log('User data:', user);
    });
  }

  login() {
    this.auth.loginWithRedirect();
  }
}
