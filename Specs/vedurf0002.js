let userRegistrationForm = require('../PO/UserRegistrationForm');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0002: Валидация введённых данных в поле “Name” работает корректно', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Введите в поле “Name” любое Name из "Invalid names" (негативный тест)', function () {
        dataForTest.vedurf0002.invalid.forEach(function (name) {
            userRegistrationForm.inputNameClear();
            userRegistrationForm.inputNameSetValue(name);
            // Comparison of expected and actual results
            userRegistrationForm.inputNameIsInvalid();
        });
    });

    it('3. Введите в поле “Name” любое Name из "Valid names" (позитивный тест)', function () {
        dataForTest.vedurf0002.valid.forEach(function (name) {
            userRegistrationForm.inputNameClear();
            userRegistrationForm.inputNameSetValue(name);
            // Comparison of expected and actual results
            userRegistrationForm.inputNameIsValid();
        });
    });
});