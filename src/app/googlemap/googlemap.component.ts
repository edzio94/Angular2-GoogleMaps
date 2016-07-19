import { Component } from '@angular/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';
import {SebmGoogleMapMarker} from "angular2-google-maps/core/directives/google-map-marker";

import {MarkerManager} from "angular2-google-maps/core/services/managers/marker-manager";
import {eventClass} from "./events.component";
@Component({
  selector: 'my-map-cmp',
  directives: [SebmGoogleMap, SebmGoogleMapMarker,eventClass],
  styles: [`
   .sebm-google-map-container {
     height: 300px;
   }
`],
  template: `
  <click>test2</click>
   <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
     <sebm-google-map-marker [latitude]="lat" [longitude]="lng" [label]="'M'">
     </sebm-google-map-marker>
     <sebm-google-map-marker *ngFor="let m of markers" [latitude]="m.lat" [longitude]="m.lng" [label]="'M'">
     </sebm-google-map-marker>
     </sebm-google-map>
 `
})

export class Googlemap {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 5;
  markers:Marker[] = [
    {
      lat: 12.23,
      lng: 9.12,
      label: 'X'
    },
    {
      lat:11.22,
      lng:8.00,
      label:'Z'
    }
  ]

  apikey: 'AIzaSyAH4PpkdHM6nXyfbu6b7HNqnKp201Yq1AI';
  ngOnInit() {

    console.log('hello `googlemap` component');
  }
}

export class Marker {
  lat: number = 51.678418;
  lng: number = 7.809007;
  label: string = "Tu mozna adres wrzucić"
}



