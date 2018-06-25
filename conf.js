"use strict";
exports.__esModule = true;
exports.config = {
    framework: 'jasmine',
    capabilities: {
        browserName: 'chrome'
    },
    specs: ['spec.js'],
    seleniumAddress: 'http://localhost:4444/wd/hub',
    noGlobals: true
};
