let userRegistrationForm = require('../PO/UserRegistrationForm');
let listOfUsers = require('../PO/ListOfUsers');
let dataForTest = require('../Fixtures/dataForTests');

describe('VEDURF0011: Во время редактировании данных, если нажать “Reset Form” будут доступны первоначальные данные ' +
    'выбранного пользователя', function () {
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
        listOfUsers.getDataFromRowByIndex(dataForTest.vedurf0011.rowIndex);
        // Comparison of expected and actual results
        listOfUsers.buttonEditIsEnabled();
    });

    it('4. Нажмите данную кнопку', function () {
        listOfUsers.buttonEditClick();
    });

    it('5. Проверьте, что выбранные данные доступны в полях формы FormName', function () {
        // Comparison of expected and actual results
        userRegistrationForm.inputNameCheckValue(dataForTest.vedurf0011.user1.name);
        userRegistrationForm.inputAddressCheckValue(dataForTest.vedurf0011.user1.address);
        userRegistrationForm.inputEmailCheckValue(dataForTest.vedurf0011.user1.email);
    });

    it('6. Проверьте, что кнопка “Reset Form” недоступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonResetFormIsDisabled();
    });

    it('7. Отредактируйте любое поле формы FormName', function () {
        userRegistrationForm.inputAddressSetValue(dataForTest.vedurf0011.user2.address);
    });

    it('8. Проверьте, что кнопка “Reset Form” доступна для нажатия', function () {
        // Comparison of expected and actual results
        userRegistrationForm.buttonResetFormIsEnabled();
    });

    it('9. Нажмите “Reset Form”', function () {
        userRegistrationForm.buttonResetFormClick();
        // Comparison of expected and actual results
        expect(userRegistrationForm.inputNameCheckValue(dataForTest.vedurf0011.user1.name));
        expect(userRegistrationForm.inputAddressCheckValue(dataForTest.vedurf0011.user1.address));
        expect(userRegistrationForm.inputEmailCheckValue(dataForTest.vedurf0011.user1.email));
    });
});