export default class validator {

    static validateDate(eventDate) {
        let regexp = /([12]\d{3}-(0[1-9]|1[0-2])-(0[1-9]|[12]\d|3[01]))/
        if (eventDate && eventDate.length) {
            if (regexp.test(eventDate)) {
                return true
            }
        }
        else return false
    }

    static validateEmail(state) {
        if (state.length && state.indexOf("@") !== -1) {
            return true
        }
        else return false
    }

    static validateString(state) {
        if (state.length) {
            return true
        }
        else return false

    };
}