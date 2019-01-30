let userRegistrationForm = require('../PO/UserRegistrationForm');
let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0008: Редактирование данных зарегистрированного пользователя', function () {
    let user; // This variable contain object user, which got from row of users table

    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Проверьте наличие данных в таблице TableName', function () {
        // Comparison of expected and actual results
        tableOfUsers.tableBodyIsNotEmpty();
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Edit” в данной строке для нажатия', function () {
        user = tableOfUsers.getDataFromRowByIndex(dataForTest.vedurf0008.rowIndex);
        // Comparison of expected and actual results
        tableOfUsers.buttonEditIsEnabled(user);
    });

    it('4. Нажмите данную кнопку', function () {
        tableOfUsers.buttonEditClick(user);
    });

    it('5. Проверьте наличие выбранных данных в полях формы FormName', function () {
        // Comparison of expected and actual results
        userRegistrationForm.inputNameCheckValue(user.name.getText());
        userRegistrationForm.inputAddressCheckValue(user.address.getText());
        userRegistrationForm.inputEmailCheckValue(user.email.getText());
    });

    it('6. Введите новые корректные данные', function () {
        userRegistrationForm.inputNameClear();
        userRegistrationForm.inputAddressClear();
        userRegistrationForm.inputEmailClear();
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0008.user.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0008.user.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0008.user.email);
    });

    it('6. Нажмите “Update”', function () {
        userRegistrationForm.buttonSubmitClick();
        // Comparison of expected and actual results
        tableOfUsers.tableRowDataCheckByRowIndex(
            dataForTest.vedurf0008.rowIndex,
            dataForTest.vedurf0008.user.name, dataForTest.vedurf0008.user.address, dataForTest.vedurf0008.user.email);
    });
});