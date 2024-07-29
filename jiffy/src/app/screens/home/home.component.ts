import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesComponent } from '../../service/services.component';
import { MenuComponent } from "../menu/menu.component";
import { Observable } from 'rxjs';
import { Service } from '../../service';
import { ServicesService } from '../../services/service.services';


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent, ServicesComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  services$: Observable<Service[]> = new Observable<Service[]>();

  constructor(private serviceService: ServicesService) {}
  
  ngOnInit(): void {
    this.services$ = this.serviceService.getServices();
  }
}
