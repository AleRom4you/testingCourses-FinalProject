let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0008: Редактирование данных зарегистрированного пользователя', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Проверьте наличие данных в таблице TableName', function () {
        // Comparison of expected and actual results
        listOfUsers.tableBodyIsNotEmpty();
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Edit” в данной строке для нажатия', function () {
        listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0008.rowIndex);
        // Comparison of expected and actual results
        listOfUsers.buttonEditIsEnabled();
    });

    it('4. Нажмите данную кнопку', function () {
        listOfUsers.buttonEditClick();
    });

    it('5. Проверьте наличие выбранных данных в полях формы FormName', function () {
        // Comparison of expected and actual results
        userRegistrationForm.inputNameCheckValue(dataForTest.vedurf0008.user1.name);
        userRegistrationForm.inputAddressCheckValue(dataForTest.vedurf0008.user1.address);
        userRegistrationForm.inputEmailCheckValue(dataForTest.vedurf0008.user1.email);
    });

    it('6. Введите новые корректные данные', function () {
        userRegistrationForm.inputNameClear();
        userRegistrationForm.inputAddressClear();
        userRegistrationForm.inputEmailClear();
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0008.user2.name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0008.user2.address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0008.user2.email);
    });

    it('6. Нажмите “Update”', function () {
        userRegistrationForm.buttonSubmitClick();
        // Comparison of expected and actual results
        listOfUsers.tableRowDataCheckByRowIndex(
            dataForTest.vedurf0008.rowIndex, dataForTest.vedurf0008.user2.name, dataForTest.vedurf0008.user2.address,
            dataForTest.vedurf0008.user2.email);
    });
});