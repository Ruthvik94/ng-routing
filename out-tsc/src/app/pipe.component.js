import { __decorate } from "tslib";
import { Component } from '@angular/core';
let PipeComponent = class PipeComponent {
    constructor() {
        this.pipe = {
            title: "Course name",
            rating: 4.975,
            students: 30123,
            price: 190.25,
            releaseDate: new Date(2020, 3, 5),
            summary: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        };
    }
};
PipeComponent = __decorate([
    Component({
        selector: 'pipe',
        template: `
                {{ pipe.title | uppercase }} <br/>
                {{ pipe.rating | number:'1.2-2' }} <br/>
                {{ pipe.students | number }} <br/>
                {{ pipe.price | currency:'INR':true }} <br/>
                {{ pipe.releaseDate | date:'shortDate' }} <br/>
                {{ pipe.summary | summary:10 }}
            `
    })
], PipeComponent);
export { PipeComponent };
//# sourceMappingURL=pipe.component.js.map