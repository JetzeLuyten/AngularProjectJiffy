import { Component } from '@angular/core';
import { Service } from '../service';
import { ServicesService } from '../service.services';
import { ServicesComponent } from '../services/services.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-screen.component.html',
  styleUrl: './service-screen.component.css'
})
export class ServiceScreenComponent {
  services$: Observable<Service[]> = new Observable<Service[]>();
  
  constructor(private serviceService: ServicesService) {}
  
  ngOnInit(): void {
    this.services$ = this.serviceService.getServices();
  }
}
