import { Component, OnInit } from '@angular/core';
import { SentimentService } from './data/sentiment.service';
import { Coordinate, Properties } from './data/types/sentiment';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PropertiesComponent } from './components/modals/properties/properties.component';
import { AnalyticsComponent } from './components/modals/analytics/analytics.component';
import { Analytics } from './data/types/analytics';
import { FilterComponent } from './components/modals/filter/filter.component';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Social';
  analytics: Analytics;
  modalHideSubscription: Subscription;
  filter: Analytics = new Analytics();
  colourBy: string;
  coordinatesData: Coordinate[] = [];
  bsModalRef: BsModalRef;
  loading: boolean = true;

  constructor(private sentimentService: SentimentService, private modalService: BsModalService) { }


  ngOnInit(): void {
    this.sentimentService.getAnalytics().subscribe((analytics: Analytics) => {
      this.analytics = analytics;
      Object.keys(this.analytics.sentiments).forEach(s => this.filter.sentiments[s] = true);
      Object.keys(this.analytics.sources).forEach(s => this.filter.sources[s] = true);
      this.getData();
    }, error => { this.showError() });
  }

  showPropertiesModal(id) {
    this.sentimentService.getProperties(id).subscribe((properties: Properties) => {
      this.bsModalRef = this.modalService.show(PropertiesComponent, {
        initialState: { properties }
      });
    }, error => { this.showError() });
  }

  showAnalyticsModal() {
    this.bsModalRef = this.modalService.show(AnalyticsComponent, {
      class: 'modal-lg',
      initialState: { analytics: this.analytics }
    });
  }

  showFilterModal() {
    this.bsModalRef = this.modalService.show(FilterComponent, {
      initialState: { filter: this.filter }
    });
    this.modalHideSubscription = this.modalService.onHide.subscribe((reason: string) => {
      this.getData();
      this.modalHideSubscription.unsubscribe();
    })
  }


  getData() {
    this.colourBy = this.filter.colourBy;
    this.sentimentService.getCoordinates(this.filter).subscribe((data: Coordinate[]) => {
      this.coordinatesData = data;
      this.loading = false;
    }, error => { this.showError() });
  }

  showError() {
    alert("Unable to connect to the backend");
  }
}
