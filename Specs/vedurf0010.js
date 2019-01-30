let userRegistrationForm = require('../PO/UserRegistrationForm');
let tableOfUsers = require('../PO/TableOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0010: Во время редактирования данных пользователя нельзя сохранить имя пользователя, которое уже ' +
    'зарегистрировано, т.е. нельзя создать дубликат имеющихся данных', function () {
    let user; // This variable contain object user, which got from row of users table

    it('1. Откройте HomePage', function () {
        browser.navigate().to(dataForTest.url);
        browser.waitForAngular();
        // Comparison of expected and actual results
        expect(browser.getCurrentUrl()).toEqual(dataForTest.url);
    });

    it('2. Проверьте наличие данных в таблице TableName, как минимум 2 пользователя', function () {
        for (let i = 0; i < 2; i++) {
            userRegistrationForm.inputNameSetValue(dataForTest.vedurf0010.users[i].name);
            userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0010.users[i].address);
            userRegistrationForm.inputEmailSetValue(dataForTest.vedurf0010.users[i].email);
            userRegistrationForm.buttonSubmitClick();
        }
        // Comparison of expected and actual results
        tableOfUsers.tableBodyIsNotEmpty();
        expect(tableOfUsers.getNumberOfRowsOfTable()).toBeGreaterThanOrEqual(2);
    });

    it('3. Выберите строку в таблице с заполненными данными, запомните её номер и проверьте доступна ли ' +
        'кнопка “Edit” в данной строке для нажатия', function () {
        user = tableOfUsers.getDataFromRowByIndex(dataForTest.vedurf0010.rowIndex);
        // Comparison of expected and actual results
        tableOfUsers.buttonEditIsEnabled(user);
    });

    it('4. Нажмите данную кнопку', function () {
        tableOfUsers.buttonEditClick(user);
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
        tableOfUsers.isTableNotContainRowByName(dataForTest.vedurf0010.users[1].name);
    });
});