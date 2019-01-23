import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment.prod';
import { Sentiment } from './types/sentiment';

@Injectable({
  providedIn: 'root'
})
export class SentimentService {
  private backendUrl = environment.backendUrl;
  
  constructor(private http : HttpClient) { }

  getData(): Observable<Sentiment[]> {
    return this.http.get<Sentiment[]>(this.backendUrl + "/data");
  }
}
