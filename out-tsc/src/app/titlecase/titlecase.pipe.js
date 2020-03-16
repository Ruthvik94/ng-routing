import { __decorate } from "tslib";
import { Pipe } from '@angular/core';
let TitleCase = class TitleCase {
    transform(value) {
        if (!value)
            return null;
        let words = value.split(' ');
        let dict = ['of', 'the'];
        words.forEach((word, index) => {
            if (index > 0 && dict.includes(word.toLowerCase())) {
                words[index] = word.toLowerCase();
            }
            else {
                //console.log(dict.includes(word.toLowerCase()));
                words[index] = (!dict.includes(word.toLowerCase()) || index == 0) ?
                    word.substr(0, 1).toUpperCase() + word.substr(1).toLowerCase() :
                    word.toLowerCase();
            }
        }, this);
        return words.join(' ');
    }
};
TitleCase = __decorate([
    Pipe({
        name: 'titleCase'
    })
], TitleCase);
export { TitleCase };
//# sourceMappingURL=titlecase.pipe.js.map