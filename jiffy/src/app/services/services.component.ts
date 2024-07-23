import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { Service } from '../service';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './services.component.html',
  styleUrl: './services.component.css'
})
export class ServicesComponent {
  @Input() service: Service = { id: 0, title: "", type: "", description: "", time: "", completed: false, author: "", publishDate: "", categoryId: 0 };

  constructor() {}

  ngOnInit(): void {

  }
}
