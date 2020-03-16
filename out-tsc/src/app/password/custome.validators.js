export class PasswordValidator {
    static match(control) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if ((control.value) !== '1234')
                    resolve({ passwordMatch: true });
                else
                    resolve(null);
            }, 1000);
        });
    }
    static checkConfirmPassword(control) {
        let newPassword = control.get('newPassword');
        let confirmPassword = control.get('confirmPassword');
        if (newPassword.value !== confirmPassword.value)
            return { passwordMatch: true };
        return { passwordMatch: false };
    }
}
//# sourceMappingURL=custome.validators.js.map