import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Sentiment } from './types/sentiment';
import { Coordinate } from './types/coordinate';
import { Properties } from './types/properties';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private backendUrl = environment.backendUrl;
  
  constructor(private http : HttpClient) { }

  getData(): Observable<Sentiment[]> {
    return this.http.get<Sentiment[]>(this.backendUrl + "/data");
  }

  getCoordinates(): Observable<Coordinate[]> {
    return this.http.get<Coordinate[]>(this.backendUrl + "/coordinates");
  }

  getProperties(id): Observable<Properties> {
    return this.http.get<Properties>(this.backendUrl + "/properties/" + id);
  }
}
