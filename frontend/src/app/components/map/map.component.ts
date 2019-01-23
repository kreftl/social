import { Component, Input, Output, EventEmitter } from '@angular/core';
import { tileLayer, latLng, marker, icon } from 'leaflet';
import { Coordinate } from '../../data/types/sentiment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  private _markerData: Coordinate[];
  private _colourBy: string;
  @Input() set markerData(data: Coordinate[]) {
    this._markerData = data;
    this.drawMarkers()
  }
  @Input() set colourBy(property: string) {
    this._colourBy = property;
    this.drawMarkers()
  }
  @Output() markerClick = new EventEmitter<string>();

  options = {
    layers: [
      tileLayer('https://maps.wikimedia.org/osm-intl/{z}/{x}/{y}.png', { maxZoom: 19, attribution: 'Wikimedia Maps' })
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
            iconUrl: this.getMarkerIcon(p)
          })
        }).on('click', () => this.markerClick.emit(p.id))
      )
    });
  }

  getMarkerIcon(p: Coordinate): string {
    switch (p[this._colourBy]) {
      case 'positive':
        return 'assets/marker-positive.png';
      case 'negative':
        return 'assets/marker-negative.png';
      case 'instagram':
        return 'assets/marker-instagram.png';
      case 'twitter':
        return 'assets/marker-twitter.png';
      default:
        return 'assets/marker-neutral.png';
    }
  }

}
