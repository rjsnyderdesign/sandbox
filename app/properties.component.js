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
var common_1 = require('@angular/common');
var router_deprecated_1 = require('@angular/router-deprecated');
var orderby_pipe_1 = require('./orderby.pipe');
var property_service_1 = require('./property.service');
var PropertiesComponent = (function () {
    function PropertiesComponent(router, propertyService) {
        this.router = router;
        this.propertyService = propertyService;
        this.orderDirection = "+";
    }
    PropertiesComponent.prototype.getProperties = function () {
        var _this = this;
        this.propertyService
            .getProperties()
            .subscribe(function (data) { return _this.propertiesObject = JSON.parse(JSON.stringify(data)).properties; }, function (error) { return alert(error); });
    };
    PropertiesComponent.prototype.reverseOrder = function () {
        if (this.orderDirection === "+") {
            this.orderDirection = "-";
        }
        else {
            this.orderDirection = "+";
        }
    };
    PropertiesComponent.prototype.ngOnInit = function () {
        this.getProperties();
    };
    PropertiesComponent = __decorate([
        core_1.Component({
            selector: 'my-properties',
            templateUrl: 'app/properties.component.html',
            directives: [common_1.CORE_DIRECTIVES, common_1.FORM_DIRECTIVES],
            pipes: [orderby_pipe_1.OrderBy]
        }), 
        __metadata('design:paramtypes', [router_deprecated_1.Router, property_service_1.PropertyService])
    ], PropertiesComponent);
    return PropertiesComponent;
}());
exports.PropertiesComponent = PropertiesComponent;
//# sourceMappingURL=properties.component.js.map