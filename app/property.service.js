"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
require('rxjs/add/operator/map');
var PropertyService = (function () {
    function PropertyService(http) {
        this.http = http;
        this.propertiesUrl = 'http://204.93.216.9:8086/property/search'; // URL to web api
    }
    PropertyService.prototype.getProperties = function () {
        var headers = new http_1.Headers({
            'Content-Type': 'application/json' });
        return this.http
            .post('http://204.93.216.9:8086/property/search', JSON.stringify({ "basic": { "cities": ["LAKEWO"] }, "pageNumber": 1, "resultsPerPage": 10 }), { headers: headers })
            .map(function (res) { return res.json(); });
    };
    PropertyService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], PropertyService);
    return PropertyService;
}());
exports.PropertyService = PropertyService;
//# sourceMappingURL=property.service.js.map