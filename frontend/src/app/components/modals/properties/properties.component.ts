import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { Properties } from '../../../data/types/properties';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.component.html',
  styleUrls: ['./properties.component.css']
})
export class PropertiesComponent implements OnInit {
  properties: Properties;

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit() {
    console.log(this.properties);
  }

}
