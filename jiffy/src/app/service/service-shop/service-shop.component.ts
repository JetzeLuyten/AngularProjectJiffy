import { Component } from '@angular/core';
import { Service } from '../../model/service';
import { ServicesService } from '../../services/service.services';
import { ServicesComponent } from '../services.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthServices } from '../../services/auth.service';

@Component({
  selector: 'app-service-shop',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-shop.component.html',
  styleUrl: './service-shop.component.css'
})
export class ServiceShopComponent {
  services: Service[] = [];
  services$: Subscription = new Subscription();
  errorMessage: string = '';
  private servicesSubscription: Subscription = new Subscription();
 
  constructor(private servicesService: ServicesService, private router: Router, private authService: AuthServices) {}
 
  ngOnInit(): void {

    this.getServices();
  }
 
  ngOnDestroy(): void {
    this.services$.unsubscribe();
  }
 
  getServices() {
    this.services$ = this.servicesService.getServices().subscribe({
      next: (result) => this.services = result,
      error: (e) => this.errorMessage = e.message
    });
  }
 
  detail(id: number) {
    this.router.navigate(['/service', id]);
  }
}
