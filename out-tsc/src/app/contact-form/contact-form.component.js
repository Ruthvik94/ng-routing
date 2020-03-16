import { __decorate } from "tslib";
import { Component } from '@angular/core';
let ContactFormComponent = class ContactFormComponent {
    constructor() {
        this.contactOptions = [
            { id: 1, name: 'Phone' },
            { id: 2, name: 'Email' }
        ];
    }
    log(x) {
        console.log(x);
    }
    submit(f) {
        console.log(f);
    }
};
ContactFormComponent = __decorate([
    Component({
        selector: 'contact-form',
        templateUrl: './contact-form.component.html',
        styleUrls: ['./contact-form.component.css']
    })
], ContactFormComponent);
export { ContactFormComponent };
//# sourceMappingURL=contact-form.component.js.map