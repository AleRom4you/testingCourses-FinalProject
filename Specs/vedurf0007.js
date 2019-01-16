let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');
let countTableRowsFromIt4 = null;

describe('VEDURF0007: В поле “Name” должны быть введены уникальные относительно таблицы TableName данные, т.е. двух и ' +
    'более одинаковых имён в таблице быть не должно', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
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
        countTableRowsFromIt4 = listOfUsers.getNumberOfRowsOfTable();
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
        expect(listOfUsers.getNumberOfRowsOfTable()).toEqual(countTableRowsFromIt4);
    });
});