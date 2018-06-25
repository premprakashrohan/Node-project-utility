import { browser, element, by, By, $, $$, ExpectedConditions} from "protractor";

describe("Website Test using Typescript",() => {
    beforeEach(() => {
        browser.driver.get("http://localhost:8080");
    });
    it("should have a title", () => {
        expect(browser.driver.getTitle()).toEqual('Fullstack Developer Acadmy');
    });
    it("should have an input box for name", () => {
        browser.driver.findElement(by.id("name")).sendKeys("Prem");
        browser.driver.findElement(by.id("greet")).click();
        expect(browser.driver.findElement(by.id("welcome")).getText()).toEqual("Welcome, Prem!");
    });
    it("sould have credits as a list", () => {
        expect(
            browser.driver.findElement(by.className("credit"))
            .getAttribute("href")).toEqual('https://fullstack-developer.academy/');
    });
});

