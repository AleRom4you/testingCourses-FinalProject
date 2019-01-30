let userRegistrationForm = require('../PO/UserRegistrationForm');
let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');
let countTableRowsFromStep4 = null;

describe('VEDURF0007: В поле “Name” должны быть введены уникальные относительно таблицы TableName данные, т.е. двух и ' +
    'более одинаковых имён в таблице быть не должно', function () {
    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Заполните поля “Name”, “Email” и “Address” корректными данными', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0007.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0007.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0007.email);
    });

    it('3. Проверьте, что кнопка “Add” доступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonSubmitIsEnabled();
    });

    it('4. Нажмите на кнопку “Add”', function () {
        userRegistrationForm.buttonSubmitClick();
        countTableRowsFromStep4 = tableOfUsers.getNumberOfRowsOfTable();
    });

    it('5. Заполните поля “Name” и “Email” такими же данными, как на шаге 2', function () {
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0007.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0007.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0007.email);
    });

    it('6. Повторите шаги 3-4', function () {
        userRegistrationForm.buttonSubmitIsEnabled();
        userRegistrationForm.buttonSubmitClick();
        // Comparison of expected and actual results
        expect(tableOfUsers.getNumberOfRowsOfTable()).toEqual(countTableRowsFromStep4);
    });
});