'use strict';

var UserRegistrationForm = function() {
    let inputName = element(by.model('controller.user.userName'));
    let inputAddress = element(by.model('controller.user.address'));
    let inputEmail = element(by.model('controller.user.email'));
    let buttonSubmit = element(by.id('submit'));
    let buttonResetForm = element(by.id('reset'));

    this.getHomePage= function() {
        browser.navigate().to('http://localhost:8080/TestAppExample/index');
        browser.waitForAngular();
    };

// Begin methods for inputName
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
// End methods for inputName

// Begin methods for inputName
    this.inputAddressSetValue = function(value) {
        inputAddress.sendKeys(value);
    };

    this.inputAddressCheckValue = function (value) {
        expect(inputAddress.getAttribute('value')).toBe(value);
    };

    this.inputAddressClear = function () {
        inputAddress.clear();
    };
// End methods for inputName

// Begin methods for inputEmail
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
// End methods for inputEmail

// Begin methods for buttonSubmit
    this.buttonSubmitIsEnabled = function () {
        expect(buttonSubmit.isEnabled()).toBe(true);
    };

    this.buttonSubmitIsDisabled = function () {
        expect(buttonSubmit.isEnabled()).toBe(false);
    };

    this.buttonSubmitClick = function () {
        buttonSubmit.click();
    };
// End methods for buttonAdd

// Begin methods for buttonResetForm
    this.buttonResetFormIsEnabled = function () {
        expect(buttonResetForm.isEnabled()).toBe(true);
    };

    this.buttonResetFormIsDisabled = function () {
        expect(buttonResetForm.isEnabled()).toBe(false);
    };

    this.buttonResetFormClick = function () {
        buttonResetForm.click();
    };
// End methods for buttonResetForm
};
module.exports = new UserRegistrationForm();