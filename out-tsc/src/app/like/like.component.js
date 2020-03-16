import { __decorate } from "tslib";
import { Component } from '@angular/core';
let LikeComponent = class LikeComponent {
    constructor() { }
    ngOnInit() {
    }
    onClick() {
        this.click = !this.click;
    }
};
LikeComponent = __decorate([
    Component({
        selector: 'like',
        templateUrl: './like.component.html',
        styleUrls: ['./like.component.css']
    })
], LikeComponent);
export { LikeComponent };
//# sourceMappingURL=like.component.js.map