import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';
import { Service } from './service';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiurl = 'https://localhost:6587/api/services';
  constructor(private httpClient: HttpClient) {}

  getServices(): Observable<Service[]> {
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Service[]>(this.apiurl)));
  }

  getServiceById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`${this.apiurl}/${id}`);
  }
}
