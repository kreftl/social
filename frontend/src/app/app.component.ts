import { Component, OnInit } from '@angular/core';
import { SentimentService } from './data/sentiment.service';
import { Sentiment } from './data/types/sentiment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Social';
  sentimentData : Sentiment[] = [];

  constructor(private sentimentService: SentimentService) { }

  ngOnInit(): void {
    this.sentimentService.getData().subscribe((data: Sentiment[]) => {
      this.sentimentData = data;
    });
  }

}
