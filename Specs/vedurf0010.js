let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0010: Во время редактирования данных пользователя нельзя сохранить имя пользователя, которое уже ' +
    'зарегистрировано, т.е. нельзя создать дубликат имеющихся данных', function () {
    it('1. Откройте HomePage (http://localhost:8080/TestAppExample/index)', function () {
        userRegistrationForm.getHomePage();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual('http://localhost:8080/TestAppExample/index');
    });

    it('2. Проверьте наличие данных в таблице TableName, как минимум 2 пользователя', function () {
        for (let i = 0; i < 2; i++) {
            userRegistrationForm.inputNameSetValue(dataForTest.vedurf0010.users[i].name);
            userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0010.users[i].address);
            userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0010.users[i].email);
            userRegistrationForm.buttonSubmitClick();
        }
        // Comparison of expected and actual results
        listOfUsers.tableBodyIsNotEmpty();
        expect(listOfUsers.getNumberOfRowsOfTable()).toBeGreaterThanOrEqual(2);
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Edit” в данной строке для нажатия', function () {
        listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0010.rowIndex);
        // Comparison of expected and actual results
        listOfUsers.buttonEditIsEnabled();
    });

    it('4. Нажмите данную кнопку', function () {
        listOfUsers.buttonEditClick();
    });

    it('5. Отредактируйте данные на форме FormName так, чтобы они были такими же, как у другого ' +
        'пользователя из таблицы TableName', function () {
        userRegistrationForm.inputNameClear();
        userRegistrationForm.inputAddressClear();
        userRegistrationForm.inputEmailClear();
        userRegistrationForm.inputNameSetValue(dataForTest.vedurf0010.users[1].name);
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0010.users[1].address);
        userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0010.users[1].email);
    });

    it('6. Нажмите “Update”', function () {
        userRegistrationForm.buttonSubmitClick();
        // Comparison of expected and actual results
        listOfUsers.isTableNotContainsDuplicateRowByName(dataForTest.vedurf0010.users[1].name);
    });
});