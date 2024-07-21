import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  constructor(private httpClient: HttpClient) {}

  getServices(): Observable<Service[]> {
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Service[]>('http://localhost:3000/services')));
  }

  getServiceById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`https://localhost:3000/services/${id}`);
  }
}
