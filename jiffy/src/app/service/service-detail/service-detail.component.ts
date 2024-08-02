import { CommonModule, Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../../model/service';
import { ServicesService } from '../../services/service.services';
import { ActivatedRoute } from '@angular/router';
import { DateFormatPipe } from '../../date-format.pipe';

@Component({
  selector: 'app-service-detail',
  standalone: true,
  imports: [CommonModule, DateFormatPipe],
  templateUrl: './service-detail.component.html',
  styleUrl: './service-detail.component.css'
})
export class ServiceDetailComponent implements OnInit {
  service: Service = { id: 0, title: "", serviceTypeId: 0, serviceType: {id: 0, name: ""}, description: "", publishDate: '', userId: 0, user: {id: 0, auth0UserId: "", email: "", fullName: ""}};

  @Input() isGuest: boolean = false; // Flag to determine if the view is for a guest
  constructor(private servicesService: ServicesService, private route: ActivatedRoute, private location: Location) {}

  ngOnInit() {
    const serviceId = this.route.snapshot.paramMap.get('id');
    if (serviceId != null) {
      this.servicesService.getServiceById(+serviceId).subscribe(result => this.service = result);
    }
  }

  goBack(): void {
    this.location.back(); // Navigate to the previous page
  }

  bookService(): void {
    // Implement the logic to book the offer
    console.log('Service booked!');
  }
}
