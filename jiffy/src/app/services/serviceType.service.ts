import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ServiceType } from '../serviceType';
import { environment } from '../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ServiceTypeService {

    private apiurl = environment.api_url;

  constructor(private httpClient: HttpClient) { }

    getServiceTypes(): Observable<ServiceType[]> {
        return this.httpClient.get<ServiceType[]>(`${this.apiurl}/ServiceType`);
    }

    getServiceTypeById(id: number): Observable<ServiceType> {
        return this.httpClient.get<ServiceType>(`${this.apiurl}/${id}`);
    }

    postServiceType(serviceType: ServiceType): Observable<ServiceType> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.post<ServiceType>(this.apiurl, serviceType, {headers: headers});
    }

    putServiceType(id:number, serviceType: ServiceType): Observable<ServiceType> {
        let headers = new HttpHeaders();
        headers = headers.set('Content-Type', 'application/json; charset=utf-8');

        return this.httpClient.put<ServiceType>(`${this.apiurl}/${id}`, serviceType, {headers: headers});
    }

    deleteServiceType(id: number): Observable<ServiceType> {
        return this.httpClient.delete<ServiceType>(`${this.apiurl}/${id}`);
    }
}
