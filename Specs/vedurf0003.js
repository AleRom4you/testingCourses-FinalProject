let userRegistrationForm = require('../PO/UserRegistrationForm');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0003: Формат введённых данных в поле "Email" обрабатывается корректно ', function () {
    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Введите в поле “Email” любой Email из "Invalid email addresses" (негативный тест)', function () {
        dataForTest.vedurf0003.invalid.forEach(function (email) {
            userRegistrationForm.inputEmailClear();
            userRegistrationForm.inputEmailSetValue(email);
            // Comparison of expected and actual results
            userRegistrationForm.inputEmailIsInvalid();
        });
    });

    it('3. Введите в поле “Email” любой Email из "Valid email addresses" (позитивный тест)', function () {
        dataForTest.vedurf0003.valid.forEach(function (email) {
            userRegistrationForm.inputEmailClear();
            userRegistrationForm.inputEmailSetValue(email);
            // Comparison of expected and actual results
            userRegistrationForm.inputEmailIsValid();
        });
    });
});