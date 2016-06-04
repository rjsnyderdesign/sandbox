import { Component } from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';

import { PropertyService } from './property.service';
import { PropertiesComponent } from './properties.component';


@Component({
	selector: 'my-app',
	template: '<router-outlet></router-outlet>',
	directives: [ROUTER_DIRECTIVES],
	providers: [
	  ROUTER_PROVIDERS,
	  PropertyService
	]
})

@RouteConfig([
	
	{
		path: '/properties',
		name: 'Properties',
		component: PropertiesComponent,
		useAsDefault: true
	}
])

export class AppComponent { 
}