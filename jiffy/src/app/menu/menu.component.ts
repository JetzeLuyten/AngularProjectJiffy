import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css'
})
export class MenuComponent {
  constructor(private router: Router) { }

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
}
