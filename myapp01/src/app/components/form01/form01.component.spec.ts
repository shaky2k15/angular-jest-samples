

import {  ReactiveFormsModule } from '@angular/forms';
import {
  MockBuilder,
  MockInstance,
  MockRender,
  ngMocks,
} from 'ng-mocks';

import { Form01Component } from './form01.component';
import {ChildComponent} from '../child/child.component'



describe('MockReactiveForms', () => {
  beforeEach(() => {
    return MockBuilder(Form01Component)
      .mock(ChildComponent)
      .keep(ReactiveFormsModule);
  });

  it('sends the correct value to the mock form component', () => {
    const writeValue = jest.fn();

    // Because of early calls of writeValue, we need to install spy via MockInstance before the render.
    MockInstance(ChildComponent, 'writeValue', writeValue);

    const fixture = MockRender(Form01Component);
    const component = fixture.point.componentInstance;

    // During initialization it should be called with null.
    expect(writeValue).toHaveBeenCalledWith(null);

    const mockControlEl = ngMocks.find(ChildComponent);
    ngMocks.change(mockControlEl, 'foo');
    expect(component.formControl.value).toBe('foo');

    // Let's check that change on existing formControl causes calls of `writeValue` on the mock component.
    component.formControl.setValue('bar');
    expect(writeValue).toHaveBeenCalledWith('bar');
  });
});



  
