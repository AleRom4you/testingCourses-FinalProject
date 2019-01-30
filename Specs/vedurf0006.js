let userRegistrationForm = require('../PO/UserRegistrationForm');
let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0006: Кнопка “Add” добавляет заполненные на форме FormName данные пользователя в таблицу TableName',
    function () {
    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Заполните поля “Name”, “Email” и “Address” корректными данными', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0006.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0006.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0006.email);
    });

    it('3. Проверьте, что кнопка “Add” доступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonSubmitIsEnabled();
    });

    it('4. Нажмите на кнопку “Add”', function () {
        userRegistrationForm.buttonSubmitClick();
        // Comparison of expected and actual results
        tableOfUsers.tableLastRowDataCheck(
            dataForTest.vedurf0006.name, dataForTest.vedurf0006.address, dataForTest.vedurf0006.email);
    });
});