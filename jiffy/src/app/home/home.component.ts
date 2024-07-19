import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ServicesComponent } from '../services/services.component';
import { MenuComponent } from "../menu/menu.component";


@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, MenuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  
}
