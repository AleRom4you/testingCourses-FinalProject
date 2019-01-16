// conf.js
exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',

    onPrepare: function() {
        var AllureReporter = require('jasmine-allure-reporter');
        jasmine.getEnv().addReporter(new AllureReporter());
        jasmine.getEnv().afterEach(function(done){
            browser.takeScreenshot().then(function (png) {
                allure.createAttachment('Screenshot', function () {
                    return new Buffer(png, 'base64')
                }, 'image/png')();
                done();
            })
        });
    },

    multiCapabilities: [{
        'browserName': 'firefox',
    }],

    specs: [
        'Specs/vedurf0001.js',
        'Specs/vedurf0002.js',
        'Specs/vedurf0003.js',
        'Specs/vedurf0004.js',
        'Specs/vedurf0005.js',
        'Specs/vedurf0006.js',
        'Specs/vedurf0007.js',
        'Specs/vedurf0008.js',
        'Specs/vedurf0009.js',
        'Specs/vedurf0010.js',
        'Specs/vedurf0011.js',
        'Specs/vedurf0012.js',
    ],

    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 30000
    },
};