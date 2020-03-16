import { __decorate } from "tslib";
import { Component } from '@angular/core';
let TitleCaseComponent = class TitleCaseComponent {
    constructor() {
        this.text = '';
    }
};
TitleCaseComponent = __decorate([
    Component({
        selector: 'titlecase',
        template: `
                <input [(ngModel)]='text' key /> <br/>
                <p> {{ text | titleCase }} </p>
            `
    })
], TitleCaseComponent);
export { TitleCaseComponent };
//# sourceMappingURL=titlecase.component.js.map