import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { Service } from '../service';
import { ServicesService } from '../service.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: Service = { id: 0, title: "", serviceType: "", description: "", time: "", publishDate: "", author: ""};

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if(serviceId != null) {
      let serviceTemp = this.servicesService.getServiceById(+serviceId) ?? null;
    }
  }
}
