import BasePage from "../pages/BasePage";
import Logger from "../../core/utils/Logger";
import { browser, WebElement, ExpectedConditions } from "protractor";
import data from "../../resources/configuration.json";

export default abstract class BaseSteps<T extends BasePage> {

    protected static LOG = Logger.getLogger();
    protected page: T;

    constructor(page: T) {
        this.page = page;
    }

    protected get getBrowser() {
        return browser;
    }

    protected async waitForElement(timeout: number = data.implicitTimeout, element: WebElement) {
        if (timeout < 0)
            throw new RangeError("Timeout error. Expected " + timeout + " > 0");

        return await browser.driver.wait(element.isDisplayed() && element.isEnabled() && element.isSelected(), timeout * 1000).then(async () => {
            return element;
        });
    }

    protected async waitAndClick(timeout: number = data.implicitTimeout, element: WebElement) {
        await this.waitForElement(timeout, await element).then(async () => {
            await element.click();
            BaseSteps.LOG.info("Button '" + await element.getText() + "' was clicked");
        }).catch(async () => {
            BaseSteps.LOG.info("Button '" + await element.getText() + "' is not clickable");
        });
        return this;
    }

    protected async waitAndSendText(timeout: number = data.implicitTimeout, element: WebElement, message: string) {
        return await this.waitForElement(timeout, await element).then(async () => {
            await element.sendKeys(message);
            BaseSteps.LOG.info("Text '" + message + "' was wrote to input: " + element.getTagName());
        }).catch(async () => {
            BaseSteps.LOG.info("Input is unavailable");
        });
    }
}

module.exports = BaseSteps;