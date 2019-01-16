let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');
let savedDataFromRow = null;

describe('VEDURF0009: Удаление данных зарегистрированного пользователя', function () {
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
        'кнопка “Remove” в данной строке для нажатия', function () {
        savedDataFromRow = listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0009.rowIndex);
        // Comparison of expected and actual results
        listOfUsers.buttonRemoveIsEnabled();
    });

    it('4. Нажмите данную кнопку', function () {
        listOfUsers.buttonRemoveClick();
    });

    it('5. В открывшемся диалоговом окне нажмите кнопку “OK”', function () {
        listOfUsers.buttonOkIsEnabled();
        listOfUsers.buttonOkClick();
        // Comparison of expected and actual results
        !expect(listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0009.rowIndex)).toEqual(savedDataFromRow);
    });
});