import { Component, OnInit } from '@angular/core';
import {CORE_DIRECTIVES, NgClass, FORM_DIRECTIVES, Control, ControlGroup, FormBuilder, Validators} from '@angular/common';

import { Router } from '@angular/router-deprecated';

import { OrderBy } from './orderby.pipe';
import { PropertyService } from './property.service';

@Component({
	selector: 'my-properties',
	templateUrl: 'app/properties.component.html',
  directives: [CORE_DIRECTIVES, FORM_DIRECTIVES],
  pipes: [OrderBy]
})

export class PropertiesComponent implements OnInit { 
  error: any;
  propertiesObject;
  orderDirection = "+";
  
  constructor(
    private router: Router,
    private propertyService: PropertyService) { }

  getProperties() {
    this.propertyService
        .getProperties()
        .subscribe(
          data => this.propertiesObject = JSON.parse(JSON.stringify(data)).properties,
          error => alert(error)
        );
  }

  reverseOrder() {
    if (this.orderDirection === "+") {
      this.orderDirection = "-";
    }
    else {
      this.orderDirection = "+";
    }
  }

  ngOnInit() {
    this.getProperties();
  }
}