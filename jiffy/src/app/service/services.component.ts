import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../model/service';
import { Router } from '@angular/router';
import { ShortenContentPipe } from '../shorten-content.pipe';
import { DateFormatPipe } from '../date-format.pipe';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ShortenContentPipe, DateFormatPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Input() service: Service = { id: 0, title: "", serviceTypeId: 0, serviceType: {id: 0, name: ""}, description: "", userId: 0, 
  user: {id: 0, auth0UserId: "", email: "", fullName: ""}, publishDate: ""  };
  @Input() isDetail: boolean = false;
  user$ = this.auth.user$;
  userName: string | undefined;
  userId: string | null = null;

  constructor(private router: Router, private location: Location, private auth: AuthService) {}

  ngOnInit(): void {
    this.user$.subscribe(user => {
      if (user) {
        this.userName = user.name;  // Access the user's email
        console.log('User name:', this.userName);
      }
    });
  }

  detail(id: number) {
    this.router.navigate(["/services", id]);
  }

  goBack() {
    this.location.back();
  }
}
