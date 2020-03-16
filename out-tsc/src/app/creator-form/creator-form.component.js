import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CreatorFormComponent = class CreatorFormComponent {
    constructor() {
        this.skills = [
            { id: 1, skill: 'Development' },
            { id: 2, skill: 'Art' },
            { id: 3, skill: 'Languages' },
        ];
    }
    onChange(x) {
        console.log(x);
    }
    onSubmit(f) {
        console.log(f);
    }
};
CreatorFormComponent = __decorate([
    Component({
        selector: 'creator-form',
        templateUrl: './creator-form.component.html',
        styleUrls: ['./creator-form.component.css']
    })
], CreatorFormComponent);
export { CreatorFormComponent };
//# sourceMappingURL=creator-form.component.js.map