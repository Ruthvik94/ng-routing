import { __decorate } from "tslib";
import { Component } from '@angular/core';
let CourseComponent = class CourseComponent {
    constructor(service) {
        this._title = "String interpolation"; //where g mean generate and c mean component
        this.url = "";
        this.image_text = 'failed to load image';
        this.isActive = true;
        this.key = "example@gmail.com";
        //let service = new CoursesService();
        this.courses = service.getCourses(); //generate service from CLI using ng g s service_name
    }
    getTitle() {
        return this._title;
    }
    onSave($event) {
        console.log('Button clicked', $event);
        $event.stopPropagation();
    }
    onDivClicked() {
        console.log('Div clicked');
    }
    onKeyUp() {
        console.log('Enter was pressed', this.key); //alternate method $event.target.value
    }
};
CourseComponent = __decorate([
    Component({
        selector: 'courses',
        template: `<h2>Now learning {{ getTitle() }}</h2>
                <ul>
                    <li *ngFor="let course of courses"> {{course}} </li>
                </ul>
                <img src="{{url}}" />                 
                <img [src]="_title" alt={{image_text}} /> <br>

                <input [(ngModel)]="key" (keyup.enter)="onKeyUp()" />
                
                <div (click)="onDivClicked()">
                    <button [style.backgroundColor]= "isActive ? 'Yellow' : 'Green'" 
                            (click)="onSave($event)"
                    >SAVE </button>
                </div>
            ` /*
                [src] property binding, {{}} string interpolation
                in property binding there is 1-1 mapping between dom object and html attributes.
                In case the attr is not part of DOM, prefix attr. in front of html attr for angular
                to map correctly to DOM like <img [attr.src] = "title" />
                class binding: dynamically modfiy know props using [class.prop]="prop"
                style binding: modify style dynamically
                In order to get values from function, use template variables.
            */
    })
], CourseComponent);
export { CourseComponent };
//# sourceMappingURL=courses.component.js.map