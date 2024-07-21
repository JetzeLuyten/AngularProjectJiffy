import { Component } from '@angular/core';
import { Service } from '../service';
import { ServicesService } from '../service.services';
import { ServicesComponent } from '../services/services.component';
import { CommonModule } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-service-screen',
  standalone: true,
  imports: [CommonModule, ServicesComponent],
  templateUrl: './service-screen.component.html',
  styleUrl: './service-screen.component.css'
})
export class ServiceScreenComponent {
  services: Service = {id: 0, title: "", type: "", description: "", time: "", completed: false, author: "", publishDate: ""};

  constructor(private serviceServices: ServicesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    const serviceId = this.route.snapshot.paramMap.get("id");
    if(serviceId != null){
      this.serviceServices.getServiceById(+serviceId).subscribe(result => this.services = result);
    }
  }
}
