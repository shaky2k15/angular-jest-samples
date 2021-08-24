

import { Component, forwardRef } from "@angular/core";
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from "@angular/forms";



@Component({
    selector: 'app-child',
    template: `<div> Just a dependency. </div>`,
    providers: [
      {
        multi: true,
        provide: NG_VALUE_ACCESSOR,
        useExisting: forwardRef(() => ChildComponent),
      },
    ]
 
  })

  export class ChildComponent implements ControlValueAccessor {
    public registerOnChange = (fn: any): void => fn;
    public registerOnTouched = (fn: any): void => fn;
    public writeValue = (obj: any): void => obj;
  }
  
  
