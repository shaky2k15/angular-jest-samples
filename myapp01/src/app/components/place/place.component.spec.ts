

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Place } from './place.model';
import { By } from '@angular/platform-browser';
import { PlaceComponent } from './place.component';

describe('PlaceComponent', () => {
  describe('PlaceComponent Tests: As a class', () => {
    let placeComponent: PlaceComponent;

    beforeEach(() => {
      placeComponent = new PlaceComponent();
      placeComponent.place = {
        name: 'Charminar',
        city: 'Hyd',
        country: 'India',
        isVisited: true,
        rating: 4,
      };
    });

    it('should return Yes when the place is visited', () => {
      expect(placeComponent.IsVisited).toEqual('Yes');
    });

    it('should return No when the place is not visited', () => {
      placeComponent.place.isVisited = false;
      expect(placeComponent.IsVisited).toEqual('No');
    });

    it('should emit event when toggleVisited is called', () => {
      placeComponent.toggleVisited.subscribe((name) =>
        expect(name).toEqual('Charminar')
      );
      placeComponent.togglePlaceVisited();
    });
  });

  describe('PlaceComponent Tests: As an independent component', () => {
    let place: Place, rootElement: HTMLElement;
    let fixture: ComponentFixture<PlaceComponent>;

    beforeEach(() => {
      fixture = TestBed.configureTestingModule({
        declarations: [PlaceComponent],
      }).createComponent(PlaceComponent);

      place = {
        name: 'Charminar',
        city: 'Hyd',
        country: 'India',
        isVisited: true,
        rating: 4,
      };

      rootElement = fixture.debugElement.query(By.css('.thumbnail'))
        .nativeElement as HTMLElement;
    });

    it('should have initialized the component', () => {
      expect(fixture.componentInstance).toBeDefined();
    });

    it('should have applied the changes when the place set is visited', () => {
      fixture.componentInstance.place = place;
      fixture.detectChanges();

      expect(rootElement.classList).toContain('visited-place');
      expect(rootElement.querySelector('div.caption')!.textContent).toEqual(
        place.name
      );
      expect(rootElement.querySelector('a')!.textContent).toEqual(
        'Mark Not Visited'
      );
    });

    it('should have applied the changes when the place set is not visited', () => {
      place.isVisited = false;
      fixture.componentInstance.place = place;
      fixture.detectChanges();

      expect(rootElement.classList).not.toContain('visited-place');
      expect(rootElement.querySelector('a')!.textContent).toEqual(
        'Mark Visited'
      );
    });

    it('should emit the event when the button is clicked', () => {
      fixture.componentInstance.place = place;
      fixture.detectChanges();

      fixture.componentInstance.toggleVisited.subscribe((name) =>
        expect(name).toEqual(place.name)
      );
      rootElement.querySelector('a')!.click();
    });
  });

});

