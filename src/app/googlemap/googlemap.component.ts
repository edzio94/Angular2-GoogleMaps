import { Component } from '@angular/core';
import { GOOGLE_MAPS_DIRECTIVES } from 'angular2-google-maps/core';
import {SebmGoogleMap} from 'angular2-google-maps/core';
@Component({
  selector: 'googleMap',
  directives: [SebmGoogleMap],
  styles: [`
   .sebm-google-map-container {
     height: 300px;
   }
`],
  template: `
   <sebm-google-map [latitude]="lat" [longitude]="lng" [zoom]="zoom">
   </sebm-google-map>
 `
})

export class Googlemap {
  title: string = 'My first angular2-google-maps project';
  lat: number = 51.678418;
  lng: number = 7.809007;
  zoom: number = 10;
  apikey: 'AIzaSyAH4PpkdHM6nXyfbu6b7HNqnKp201Yq1AI';
  ngOnInit() {
    console.log('hello `googlemap` component');
  }
}


