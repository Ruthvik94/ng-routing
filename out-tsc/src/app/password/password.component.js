import { __decorate } from "tslib";
import { Component } from '@angular/core';
import { Validators } from '@angular/forms';
import { PasswordValidator } from './custome.validators';
let PasswordComponent = class PasswordComponent {
    constructor(fb) {
        this.form = fb.group({
            oldPassword: fb.control('', Validators.required, PasswordValidator.match),
            newPassword: fb.control('', Validators.required),
            confirmPassword: fb.control('', Validators.required)
        }, {
            validators: PasswordValidator.checkConfirmPassword
        });
    }
    get oldPassword() {
        return this.form.get('oldPassword');
    }
    get newPassword() {
        return this.form.get('newPassword');
    }
    get confirmPassword() {
        return this.form.get('confirmPassword');
    }
    /* get formGroup(){
      return this.form.get('password');
    } */
    onChange() {
        //console.log('haha')
        console.log(this.oldPassword);
    }
};
PasswordComponent = __decorate([
    Component({
        selector: 'password',
        templateUrl: './password.component.html',
        styleUrls: ['./password.component.css']
    })
], PasswordComponent);
export { PasswordComponent };
//# sourceMappingURL=password.component.js.map