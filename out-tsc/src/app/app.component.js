import { __decorate } from "tslib";
import { Component } from '@angular/core';
let AppComponent = class AppComponent {
    constructor() {
        this.title = 'hello-world';
        this.list = [12];
        this.viewMode = "hdhh";
        this.post = {
            isFavourite: true
        };
    }
    onAdd() {
        //this.course.push({id: 4, name: 'course4'});
        this.course = [
            { id: 1, name: 'Course1' },
            { id: 2, name: 'Course2' },
            { id: 3, name: 'Course3' }
        ];
    }
    onTrackBy(course) {
        return course !== undefined ? course.id : null;
    }
    onFavouriteChanged(param) {
        console.log('Clicked on star: ', param);
    }
};
AppComponent = __decorate([
    Component({
        selector: 'app-root',
        templateUrl: './app.component.html',
        styleUrls: ['./app.component.css']
    })
], AppComponent);
export { AppComponent };
//# sourceMappingURL=app.component.js.map