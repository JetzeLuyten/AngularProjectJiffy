import { Injectable } from '@angular/core';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor() { }

  getServices(): Service[] {
    let services: Service[] = [];

    let service1: Service = {
      id: 1,
      title: "Window washers required!",
      type: "Cleaning",
      description: "Wash windows of the villa",
      time: "20 hours",
      completed: false,
      author: "Rendy Werner",
      publishDate: "15/02/2024"
    };

    services.push(service1);

    return services;
  }
}
