import { Component } from '@angular/core';
import { Service } from '../../service';
import { ServicesService } from '../../services/service.services';
import { ServicesComponent } from '../services.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { AuthServices } from '../../services/auth.service';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-screen.component.html',
  styleUrl: './service-screen.component.css'
})
export class ServiceScreenComponent {
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

  loadServices(): void {
    this.servicesSubscription = this.servicesService.getServicesNotCreatedByUser().subscribe(
      (result) => {
        this.services = result;
      },
      (error) => {
        this.errorMessage = error.message;
      }
    );
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
