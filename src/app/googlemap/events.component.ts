import { Component } from '@angular/core';
import { Googlemap } from './googlemap';
import {Marker} from "./googlemap.component";
@Component({
  selector: 'click',
  template: `
  <button (click)="addNextMarker()">addNextMarker</button>
  `
})

export class eventClass {
  addNextMarker(){
    alert('test');
  }
}
