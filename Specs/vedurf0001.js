let userRegistrationForm = require('../PO/UserRegistrationForm');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0001: Минимальная длина введённых данных в поле "Name" = 3', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Введите в поле “Name” Name1 (негативный тест)', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0001.name1);
        // Comparison of expected and actual results
        userRegistrationForm.inputNameIsInvalidMinLength();
    });

    it('3. Введите в поле “Name” Name2 (позитивный тест)', function () {
        userRegistrationForm.inputNameClear();
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0001.name2);
        // Comparison of expected and actual results
        userRegistrationForm.inputNameIsValidMinLength();
    });
});