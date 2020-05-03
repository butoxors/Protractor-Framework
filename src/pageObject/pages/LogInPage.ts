import { By } from "protractor"
import BasePage from "./BasePage";

export default class LogInPage extends BasePage {
    
    get inpEmail() {
        return By.xpath("//input[@type='email']");
    }

    get inpPassword() {
        return By.xpath("//input[@name='password']");
    }

    get btnSubmit() {
        return By.xpath("//button[@type='submit']");
    }

    get btlShowPassword() {
        return By.xpath("//button[@ng-click]");
    }

    get lblErrorAlertMessage() {
        return By.css("div.noty_bar span");
    }
}

module.exports = LogInPage;