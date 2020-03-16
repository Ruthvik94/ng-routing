import { __decorate } from "tslib";
import { Component } from '@angular/core';
let StartComponent = class StartComponent {
    onClick() {
        this.press = !this.press;
    }
};
StartComponent = __decorate([
    Component({
        selector: 'star',
        template: `
        <span [class]="press ? 'fa fa-star' : 'fa fa-star-o'" (click)="onClick()" ></span>        
    `
        /* <span class='fa
                    [class.fa-star] = "press"
                    [class.fa-star-o] = "!press"'
                (click)="onClick()" ></span>  */
    })
], StartComponent);
export { StartComponent };
//# sourceMappingURL=star.component.js.map