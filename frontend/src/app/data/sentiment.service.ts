import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Coordinate, Properties } from './types/sentiment';
import { Analytics } from './types/analytics';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private backendUrl = environment.backendUrl;
  
  constructor(private http : HttpClient) { }

  getAnalytics(): Observable<Analytics> {
    return this.http.get<Analytics>(this.backendUrl + "/analytics");
  }

  getCoordinates(filter: Analytics): Observable<Coordinate[]> {
    return this.http.post<Coordinate[]>(this.backendUrl + "/coordinates", filter);
  }

  getProperties(id): Observable<Properties> {
    return this.http.get<Properties>(this.backendUrl + "/properties/" + id);
  }
}
