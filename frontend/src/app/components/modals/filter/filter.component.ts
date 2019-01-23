import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Analytics } from '../../../data/types/analytics';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  sources = [];
  sentiments = [];
  filter: Analytics;
  colourBy: string;
  @Output() filterSelected = new EventEmitter<Analytics>();

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.sources = Object.keys(this.filter.sources);
    this.sentiments = Object.keys(this.filter.sentiments);
  }

  doFilter() {
    this.filterSelected.emit(this.filter);
    this.bsModalRef.hide();
  }

}
