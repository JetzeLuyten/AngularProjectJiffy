import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ServicesComponent } from '../services.component';
import { Service } from '../../model/service';
import { ServicesService } from '../../services/service.services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: Service = { id: 0, title: "", serviceTypeId: 0, serviceType: {id: 0, name: ""}, description: "", publishDate: '', userId: 0, user: {id: 0, auth0UserId: "", email: "", fullName: ""}};

  constructor(private servicesService: ServicesService, private route: ActivatedRoute) {}

  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId != null) {
      this.servicesService.getServiceById(+serviceId).subscribe(result => this.service = result);
    }
  }

  
}
