'use strict';

var ListOfUsers = function() {
    let tableBody = element(by.tagName('tbody')),
        tableRows = tableBody.all(by.tagName('tr'));
    let modalDialog = element(by.className('modal-dialog ')),
        buttonOk = modalDialog.element(by.id('ok'));
// User object for store information from row of table
    let user = {name:null, address:null, email:null, buttonEdit:null, buttonRemove:null};

// Begin methods for tableBody
    this.tableBodyIsNotEmpty = function () {
        expect(tableRows.count()).toBeGreaterThan(0);
    };
// End methods for tableBody

// Begin methods for tableRows
    this.getDataFromRowByIndex = function (index) {
        let row = tableRows.get(index);
        user.name = row.element(by.binding('u.userName'));
        user.address = row.element(by.binding('u.address'));
        user.email = row.element(by.binding('u.email'));
        user.buttonEdit = row.element(by.id('edit'));
        user.buttonRemove = row.element(by.id('remove'));
        return user;
    };

    this.getDataFromRow = function (row) {
        user.name = row.element(by.binding('u.userName'));
        user.address = row.element(by.binding('u.address'));
        user.email = row.element(by.binding('u.email'));
        user.buttonEdit = row.element(by.id('edit'));
        user.buttonRemove = row.element(by.id('remove'));
        return user;
    };

    this.getNumberOfRowsOfTable = function () {
        return tableRows.count();
    };

    this.tableRowDataCheckByRowIndex = function (index, name, address, email) {
        this.getDataFromRowByIndex(index);

        expect(user.name.getText()).toEqual(name);
        expect(user.address.getText()).toEqual(address);
        expect(user.email.getText()).toEqual(email);
    };

    this.tableLastRowDataCheck = function (name, address, email) {
        this.getDataFromRow(tableRows.last());

        expect(user.name.getText()).toEqual(name);
        expect(user.address.getText()).toEqual(address);
        expect(user.email.getText()).toEqual(email);
    };

    this.isTableNotContainsDuplicateRowByName = function (name) {
        expect(tableRows.all(by.cssContainingText('.user-name-td', name)).count()).toEqual(1);
    };
// End methods for tableRows

// Begin methods for buttonEdit
    this.buttonEditIsEnabled = function () {
        expect(user.buttonEdit.isEnabled()).toBe(true);
    };

    this.buttonEditClick = function () {
        user.buttonEdit.click();
    };
// Begin methods for buttonEdit

// Begin methods for buttonRemove
    this.buttonRemoveIsEnabled = function () {
        expect(user.buttonRemove.isEnabled()).toBe(true);
    };

    this.buttonRemoveIsDisabled = function () {
        expect(user.buttonRemove.isEnabled()).toBe(false);
    };

    this.buttonRemoveClick = function () {
        user.buttonRemove.click();
    };
// Begin methods for buttonRemove

// Begin methods for buttonOk
    this.buttonOkIsEnabled = function () {
        expect(buttonOk.isEnabled()).toBe(true);
    };

    this.buttonOkClick = function () {
        buttonOk.click();
    };
// Begin methods for buttonOk
};
module.exports = new ListOfUsers();