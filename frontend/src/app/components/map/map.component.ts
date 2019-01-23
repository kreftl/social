import { Component, OnInit, Input } from '@angular/core';
import { tileLayer, latLng, circle, polygon, marker, icon } from 'leaflet';
import { Sentiment } from '../../data/types/sentiment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css'],
})
export class MapComponent {
  private _pointerData: Sentiment[];
  @Input() set pointerData(data: Sentiment[]) {
    this._pointerData = data;
    this.drawMarkers()
  }

  options = {
    layers: [
      tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { maxZoom: 18, attribution: 'Open Street Map' })
    ],
    zoom: 15,
    center: latLng(1.335298682, 103.740123287)
  };

  layers = [];

  drawMarkers() {
    this.layers = [];
    this._pointerData.forEach(p => {
      this.layers.push(
        marker([p.coordinate.coordinates[1], p.coordinate.coordinates[0]], {
          icon: icon({
            iconSize: [12, 20],
            iconAnchor: [13, 41],
            iconUrl: 'assets/marker-icon.png'
          })
        })
      )
    });
  }

}
