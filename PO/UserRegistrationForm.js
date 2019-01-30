'use strict';

let UserRegistrationForm = function() {
    let inputName = element(by.model('controller.user.userName')),
        inputAddress = element(by.model('controller.user.address')),
        inputEmail = element(by.model('controller.user.email')),
        buttonSubmit = element(by.id('submit')),
        buttonResetForm = element(by.id('reset'));

    this.inputNameSetValue = function(value) {
        inputName.sendKeys(value);
    };

    this.inputNameCheckValue = function (value) {
        expect(inputName.getAttribute('value')).toBe(value);
    };

    this.inputNameClear = function () {
        inputName.clear();
    };

    this.inputNameIsInvalidMinLength = function () {
        expect(inputName.getAttribute('class')).toMatch('ng-invalid-minlength');
    };

    this.inputNameIsValidMinLength = function () {
        expect(inputName.getAttribute('class')).toMatch('ng-valid-minlength');
    };

    this.inputNameIsValid = function () {
        expect(inputName.getAttribute('class')).toMatch('ng-valid');
    };

    this.inputNameIsInvalid = function () {
        expect(inputName.getAttribute('class')).toMatch('ng-invalid');
    };

    this.inputNameIsInvalidRequired = function () {
        expect(inputName.getAttribute('class')).toMatch('ng-invalid-required');
    };

    this.inputAddressSetValue = function(value) {
        inputAddress.sendKeys(value);
    };

    this.inputAddressCheckValue = function (value) {
        expect(inputAddress.getAttribute('value')).toBe(value);
    };

    this.inputAddressClear = function () {
        inputAddress.clear();
    };

    this.inputEmailSetValue = function(value) {
        inputEmail.sendKeys(value);
    };

    this.inputEmailCheckValue = function (value) {
        expect(inputEmail.getAttribute('value')).toBe(value);
    };

    this.inputEmailClear = function () {
        inputEmail.clear();
    };

    this.inputEmailIsValid = function () {
        expect(inputEmail.getAttribute('class')).toMatch('ng-valid');
    };

    this.inputEmailIsInvalid = function () {
        expect(inputEmail.getAttribute('class')).toMatch('ng-invalid');
    };

    this.inputEmailIsInvalidRequired = function () {
        expect(inputEmail.getAttribute('class')).toMatch('ng-invalid-required');
    };

    this.buttonSubmitIsEnabled = function () {
        expect(buttonSubmit.isEnabled()).toBe(true);
    };

    this.buttonSubmitIsDisabled = function () {
        expect(buttonSubmit.isEnabled()).toBe(false);
    };

    this.buttonSubmitClick = function () {
        buttonSubmit.click();
    };

    this.buttonResetFormIsEnabled = function () {
        expect(buttonResetForm.isEnabled()).toBe(true);
    };

    this.buttonResetFormIsDisabled = function () {
        expect(buttonResetForm.isEnabled()).toBe(false);
    };

    this.buttonResetFormClick = function () {
        buttonResetForm.click();
    };
};
module.exports = new UserRegistrationForm();