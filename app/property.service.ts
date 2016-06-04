import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/map';


@Injectable()
export class PropertyService {

	private propertiesUrl = 'http://204.93.216.9:8086/property/search'; // URL to web api

	constructor(private http: Http) { }

	getProperties() {
		let headers = new Headers({
	    'Content-Type': 'application/json'});
	  return this.http
	             .post('http://204.93.216.9:8086/property/search', JSON.stringify({"basic":{"cities":["LAKEWO"]},"pageNumber":1,"resultsPerPage":10}), {headers: headers})
	             .map(res => res.json());	             	
	}
} 