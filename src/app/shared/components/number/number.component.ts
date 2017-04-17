import { Component, OnInit, Input } from '@angular/core';

import { numberField } from '../../custom-types/form-fields/interfaces/number-field';

@Component({
  moduleId: module.id,
  selector: 'app-number',
  templateUrl: 'number.component.html',
  styleUrls: ['number.component.scss']
})
export class NumberComponent implements OnInit {

  public fieldProperties: numberField;

  @Input() public fieldSpecs: numberField = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
