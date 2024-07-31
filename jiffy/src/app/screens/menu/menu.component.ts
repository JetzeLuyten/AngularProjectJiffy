import { CommonModule } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { AuthService } from '@auth0/auth0-angular';
import { LoginComponent } from "../../auth0/login/login.component";
import { SignupComponent } from '../../auth0/signup/signup.component';
import { NavbarComponent } from "../navbar/navbar.component";
import { RoleService } from '../../services/role.service';
import { LogoutComponent } from "../../auth0/logout/logout.component";
import { AuthServices} from "../../services/auth.service"

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
  user$ = this.auth.user$;
  userName: string | undefined;
  userId: string | null = null;

  constructor(private router: Router, private authService: AuthService, public roleService: RoleService, private authServices: AuthServices, private auth: AuthService) {
    this.authService.isAuthenticated$.subscribe((auth) => {
      this.isAuthenticated.set(auth)
    });

    this.roleService.hasPermission('getall:services').subscribe(r => {
      this.isAdmin.set(r);
    })
   }

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;  // Access the user's email
        console.log('User name:', this.userName);
      }
    });
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
