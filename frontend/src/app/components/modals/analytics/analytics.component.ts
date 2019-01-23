import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Analytics } from '../../../data/types/analytics';

@Component({
  selector: 'app-analytics',
  templateUrl: './analytics.component.html',
  styleUrls: ['./analytics.component.css']
})
export class AnalyticsComponent implements OnInit {
  analytics: Analytics;
  sentimentData = [];
  sourcesData = [];
  sourcesColors = {
    domain: ['#b83dba', '#00a8f3']
  }
  sentimentColors = {
    domain: ['#2ecc71', '#e85141', '#abcdef']
  }

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.sentimentData = this.preprareData(this.analytics.sentiments);
    this.sourcesData = this.preprareData(this.analytics.sources);
  }

  preprareData(data) {
    let dataset = [];
    Object.keys(data).forEach(l1 => {
      let category = {
        name: l1,
        series: []
      }
      Object.keys(data[l1]).forEach(l2 => {
        category.series.push({
          name: l2,
          value: data[l1][l2]
        })
        
      });
      dataset.push(category);
    });
    return dataset;
  }
}
