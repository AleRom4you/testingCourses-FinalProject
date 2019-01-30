let userRegistrationForm = require('../PO/UserRegistrationForm');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0004: Поля "Name" и "Email" являются обязательными для заполнения', function () {
    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Заполните поля “Name” и “Email” корректными данными', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0004.name);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0004.email);
        // Comparison of expected and actual results
        userRegistrationForm.inputNameIsValid();
        userRegistrationForm.inputEmailIsValid();
        userRegistrationForm.buttonSubmitIsEnabled();
        userRegistrationForm.buttonResetFormIsEnabled();
    });

    it('3. Сотрите введённые данные', function () {
        userRegistrationForm.inputNameClear();
        userRegistrationForm.inputEmailClear();
        // Comparison of expected and actual results
        userRegistrationForm.inputNameIsInvalidRequired();
        userRegistrationForm.inputEmailIsInvalidRequired();
        userRegistrationForm.buttonSubmitIsDisabled();
    });
});