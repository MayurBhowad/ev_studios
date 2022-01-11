const Validator = require('validator');
const isEmpty = require('./is-empty.validator');


module.exports = function validateUserLogin(data) {
    let errors = {}

    data.username = !isEmpty(data.username) ? data.username : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isLength(data.username, { min: 6, max: 12 })) {
        errors.username = 'username to be between 6-12 letters!';
    }

    if (!Validator.isAlphanumeric(data.username)) {
        errors.username = ' username to be alphanumeric!';
    }

    if (Validator.isEmpty(data.username)) {
        errors.username = 'Username is required!';
    }

    if (!Validator.isStrongPassword(data.password)) {
        errors.password = 'password to allow alphabet, numbers, special characters!'
    }

    if (!Validator.isLength(data.password, { min: 6 })) {
        errors.password = 'minimum password length is 6!'
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password is required!';
    }

    return {
        errors,
        isValid: isEmpty(errors)
    }
}