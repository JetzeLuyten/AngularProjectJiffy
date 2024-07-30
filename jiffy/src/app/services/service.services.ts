import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, switchMap, timer } from 'rxjs';
import { Service } from '../service';
import { environment } from '../../environments/environment.development';
import { AuthServices } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private apiurl = environment.api_url;
  userId: number | undefined;

  constructor(private httpClient: HttpClient, private auth: AuthServices) {}

  getServicesNotCreatedByUser(): Observable<any[]> {
    const userId = this.auth.getUserId();
    if (userId !== null) {
      return this.httpClient.get<any[]>(`${this.apiurl}${userId}`);
    } else {
      // Handle case where user ID is not available (e.g., user not logged in)
      return new Observable(observer => {
        observer.error('User not authenticated');
      });
    }
  }

  getServices(): Observable<Service[]> {
    return timer(1, 3000).pipe(switchMap(() => this.httpClient.get<Service[]>(`${this.apiurl}/Services`)));
  }

  getServicesFromUser(): Observable<Service[]> {
    return this.httpClient.get<Service[]>(`${this.apiurl}/Services` + this.auth.getUserId() + '&_sort=id&_order=desc&_expand=status&_expand=category');
  }

  deleteService(id: number): Observable<Service> {
    return this.httpClient.delete<Service>(`${this.apiurl}/Services/${id}`);
  }

  postService(service: Service): Observable<Service> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.post<Service>(this.apiurl, service, {headers: headers});
}

  getServiceById(id: number): Observable<Service> {
    return this.httpClient.get<Service>(`${this.apiurl}/Services/${id}`);
  }

  putService(id: number, service: Service): Observable<Service> {
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');

    return this.httpClient.put<Service>(`${this.apiurl}/Services/${id}`, service, {headers: headers});
  }

  /* publishArticle(id: number): Observable<Service> {
    return this.getArticleById(id).pipe(
            switchMap(article => {
              article.statusId = StatusEnum.PUBLISHED;
              return this.putArticle(id, article);
            })
    );

  } */
}
