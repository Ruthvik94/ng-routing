import { __decorate } from "tslib";
import { Directive, HostListener, Input } from '@angular/core';
let FormatDirective = class FormatDirective {
    constructor(el) {
        this.el = el;
    }
    onBlur() {
        const value = this.el.nativeElement.value;
        console.log(value, this.format);
        if (this.format == 'uppercase') {
            this.el.nativeElement.value = value.toUpperCase();
        }
        else {
            this.el.nativeElement.value = value.toLowerCase();
        }
    }
};
__decorate([
    Input('appFormat')
], FormatDirective.prototype, "format", void 0);
__decorate([
    HostListener('blur')
], FormatDirective.prototype, "onBlur", null);
FormatDirective = __decorate([
    Directive({
        selector: '[appFormat]'
    })
], FormatDirective);
export { FormatDirective };
//# sourceMappingURL=format.directive.js.map