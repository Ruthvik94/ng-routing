import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
let FavouriteComponent = class FavouriteComponent {
    constructor() {
        this.change = new EventEmitter();
    }
    ngOnInit() {
    }
    onClick() {
        this.isFavourite = !this.isFavourite;
        this.change.emit({ selected: this.isFavourite });
    }
};
__decorate([
    Input('star')
], FavouriteComponent.prototype, "isFavourite", void 0);
__decorate([
    Output('starEvent')
], FavouriteComponent.prototype, "change", void 0);
FavouriteComponent = __decorate([
    Component({
        selector: 'favourite',
        templateUrl: './favourite.component.html',
        /* template: '',        --> html can be writter here, however only of the two will be considered from URL or template
        styles: []        --> styles can defined here as well but the one defined at the will be taken as in styles property appears last, those values will be taken    */
        styleUrls: ['./favourite.component.css'],
    })
], FavouriteComponent);
export { FavouriteComponent };
//# sourceMappingURL=favourite.component.js.map