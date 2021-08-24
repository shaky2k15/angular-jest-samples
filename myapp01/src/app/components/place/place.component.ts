

import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Place } from './place.model';

@Component({
  selector: 'app-place',
  templateUrl: './place.component.html',
  styleUrls: ['./place.component.css']
})
export class PlaceComponent  {

  @Input('selectedPlace')
  place!: Place;
  placeChanged: string = '';

  @Output('toggleVisited')
  toggleVisited = new EventEmitter<string>();

  togglePlaceVisited() {
    this.toggleVisited.emit(this.place.name);
  }

  get IsVisited(): string {
    return this.place.isVisited? 'Yes' : 'No';
  }

}

