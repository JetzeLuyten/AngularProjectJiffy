import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginComponent } from "../login/login.component";
import { LogoutComponent } from "../logout/logout.component";
import { SignupComponent } from '../signup/signup.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { RoleService } from '../role.service';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule, LoginComponent, LogoutComponent, SignupComponent, NavbarComponent],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  isAuthenticated = signal(false);
  isAdmin = signal(false);

  constructor(private router: Router, private authService: AuthService, public roleService: RoleService) {
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated.set(auth)
    });

    this.roleService.hasPermission('getall:services').subscribe(r => {
      this.isAdmin.set(r);
    })
   }

  ngOnInit(): void {
  }

  hamburgerOpen = false;
  adminDropdownOpen = false;

  toggleHamburger(): void {
    this.hamburgerOpen = !this.hamburgerOpen;
  }

  onHamburgerItemClick() {
    if (this.hamburgerOpen) {
      this.hamburgerOpen = false;
    }
  }

  onAdminDropDownClick() {
    this.adminDropdownOpen = !this.adminDropdownOpen;
  }

  closeAdminDropDown() {
    this.adminDropdownOpen = false;
  }

  navigateTo(path: string) {
    this.closeAdminDropDown();
    this.hamburgerOpen = false;
    this.router.navigate([path]);
  }

  navbarOpen = false;

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }
}
