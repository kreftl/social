import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Properties } from '../../../data/types/sentiment';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Properties;
  postDate: Date;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    this.postDate = new Date(this.properties.year, this.properties.month - 1, this.properties.day, this.properties.hour, this.properties.minute, this.properties.second);
  }

}
