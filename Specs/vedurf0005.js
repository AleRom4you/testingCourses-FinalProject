let userRegistrationForm = require('../PO/UserRegistrationForm');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0005: Кнопка “Reset Form” по нажатию очищает введенные в текстовые поля данные', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Заполните поля “Name”, “Email” и “Address” корректными данными', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0005.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0005.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0005.email);
    });

    it('3. Проверьте, что кнопка “Reset Form” доступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonResetFormIsEnabled();
    });

    it('4. Нажмите на кнопку “Reset Form”', function () {
        userRegistrationForm.buttonResetFormClick();
        // Comparison of expected and actual results
        userRegistrationForm.inputNameCheckValue('');
        userRegistrationForm.inputAddressCheckValue('');
        userRegistrationForm.inputEmailCheckValue('');
    });
});