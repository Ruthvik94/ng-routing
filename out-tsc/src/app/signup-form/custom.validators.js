export class UsernameValidators {
    static CannotContainSpace(control) {
        if (control.value.indexOf(' ') !== -1)
            return { cannotContainSpace: true };
        // return {minlength: {
        //     requiredLength: 3,
        //     actualLength: 5
        // }}
        return null;
    }
    static shouldBeUnique(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (control.value == 'Ruth')
                    resolve({ shouldBeUnique: true });
                else
                    resolve(null);
            }, 2000);
        });
    }
}
//# sourceMappingURL=custom.validators.js.map