import { Component, OnInit, Input } from '@angular/core';

import { fieldGroup } from '../../custom-types/form-fields/interfaces/field-group';

@Component({
  moduleId: module.id,
  selector: 'app-radio-group',
  templateUrl: 'radio-group.component.html',
  styleUrls: ['radio-group.component.scss']
})
export class RadioGroupComponent implements OnInit {

  public fieldProperties: fieldGroup;

  @Input() public fieldSpecs: fieldGroup = null;

  constructor() { }

  public ngOnInit() {
    if ( this.fieldSpecs ) {
      this.fieldProperties = this.fieldSpecs;
    }
  }

}
