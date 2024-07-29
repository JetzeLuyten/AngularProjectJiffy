import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service';
import { Router } from '@angular/router';
import { ShortenContentPipe } from '../shorten-content.pipe';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule, ShortenContentPipe],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Input() service: Service = { id: 0, title: "", serviceTypeId: 0, serviceType: {id: 0, name: ""}, description: "", time: "", author: "", publishDate: "" };
  @Input() isDetail: boolean = false;

  constructor(private router: Router) {}

  ngOnInit(): void {

  }

  detail(id: number) {
    this.router.navigate(["/services", id]);
  }
}
