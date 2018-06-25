"use strict";
exports.__esModule = true;
var protractor_1 = require("protractor");
describe("Website Test using Typescript", function () {
    beforeEach(function () {
        protractor_1.browser.driver.get("http://localhost:8080");
    });
    it("should have a title", function () {
        expect(protractor_1.browser.driver.getTitle()).toEqual('Fullstack Developer Acadmy');
    });
    it("should have an input box for name", function () {
        protractor_1.browser.driver.findElement(protractor_1.by.id("name")).sendKeys("Prem");
        protractor_1.browser.driver.findElement(protractor_1.by.id("greet")).click();
        var value = "Welcome, Prem!";
        expect(protractor_1.browser.driver.findElement(protractor_1.by.id("welcome")).getText()).toEqual(protractor_1.$, { value: value });
    });
    it("sould have credits as a list", function () {
        expect(protractor_1.browser.driver.findElement(protractor_1.by.className("credit"))
            .getAttribute("href")).toEqual('https://fullstack-developer.academy/');
    });
});
