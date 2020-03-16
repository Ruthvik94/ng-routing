import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { UsernameValidators } from './custom.validators';
let SignupFormComponent = class SignupFormComponent {
    constructor(fb) {
        // form = new FormGroup({
        //   account: new FormGroup({
        //       username: new FormControl('',
        //       Validators.required, 
        //       UsernameValidators.shouldBeUnique
        //     )
        //   }),
        //     /*[
        //       Validators.required,
        //       Validators.minLength(5),
        //       UsernameValidators.CannotContainSpace
        //     ], UsernameValidators.shouldBeUnique),*/
        //   password: new FormControl('', Validators.required)
        // })
        this.topicForm = new FormGroup({
            topics: new FormArray([])
        });
        this.form = fb.group({
            account: fb.group({
                username: fb.control('', Validators.required, UsernameValidators.shouldBeUnique)
            }),
            password: fb.control('', Validators.required)
        });
    }
    addTopic(topic) {
        (this.topics).push(new FormControl(topic.value));
        topic.value = "";
    }
    deleteTopic(topic) {
        let index = this.topics.controls.indexOf(topic);
        this.topics.removeAt(index);
    }
    get topics() {
        return this.topicForm.get('topics');
    }
    get Username() {
        return this.form.get('account.username');
    }
    onSubmit() {
        this.form.setErrors({
            invalidLogin: true
        });
    }
};
SignupFormComponent = __decorate([
    Component({
        selector: 'signup-form',
        templateUrl: './signup-form.component.html',
        styleUrls: ['./signup-form.component.css']
    })
], SignupFormComponent);
export { SignupFormComponent };
//# sourceMappingURL=signup-form.component.js.map