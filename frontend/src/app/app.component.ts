import { Component, OnInit } from '@angular/core';
import { SentimentService } from './data/sentiment.service';
import { Coordinate } from './data/types/coordinate';
import { Properties } from './data/types/properties';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { PropertiesComponent } from './components/modals/properties/properties.component';
import { Sentiment } from './data/types/sentiment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Social';
  coordinatesData: Coordinate[] = [];
  bsModalRef: BsModalRef;

  constructor(private sentimentService: SentimentService, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.sentimentService.getCoordinates().subscribe((data: Coordinate[]) => {
      this.coordinatesData = data;
    });
  }

  showPropertiesModal(id) {
    this.sentimentService.getProperties(id).subscribe((data: Properties) => {
      this.bsModalRef = this.modalService.show(PropertiesComponent, {
        initialState: {
          properties: data,
        }
      });
    });
  }

}
