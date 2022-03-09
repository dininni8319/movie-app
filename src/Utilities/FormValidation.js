
import { useState } from 'react';

//  checks if every input is empty 
export function inputValidation(data) {
    const invalid = Object.values(data).every(el => el === '')
    return invalid;
}

//  works 
export const errorMessages = {
    email: 'Your email is not valid!',
    passwordRepeat: 'The passwords must be the same and with a capital letter, number, and special ch.',
    formFields: "All the fields are required",
    notValidPassword: 'Your password must contain at list one capital letter, one number and one special!'
}

// works
export function validEmail(email) {
    const reg = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return reg.test(email)
}

//  works, checks if there is at list one char lower, upper, number and special. 
export function passwordValidation(password) {
    const re = new RegExp(/^(?=.{5,})(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[\W])/);
    return re.test(password);
}