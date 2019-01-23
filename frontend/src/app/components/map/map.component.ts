import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { Coordinate } from '../../data/types/coordinate';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  private _markerData: Coordinate[];
  @Input() set markerData(data: Coordinate[]) {
    this._markerData = data;
    this.drawMarkers()
  }
  @Output() markerClick = new EventEmitter<string>();

  options = {
    layers: [
  //    tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {  attribution: 'Open Street Map' }),
      tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', { maxZoom: 19, attribution: 'Open Street Map' })
    ],
    zoom: 15,
    center: latLng(1.335298682, 103.740123287)
  };

  layers = [];
 
  drawMarkers() {
    this.layers = [];
    this._markerData.forEach(p => {
      this.layers.push(
        marker([p.coordinates[1], p.coordinates[0]], {
          riseOnHover: true,
          icon: icon({
            iconSize: [12, 20],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png'
          })
        }).on('click', () => this.markerClick.emit(p.id))
      )
    });
  }

}
