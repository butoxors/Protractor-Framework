import { By } from "protractor"
import BasePage from "./BasePage";

export default class AccountPage extends BasePage {
    
    get btnLogOut() {
        return By.xpath("//button[contains(.,'Log out')]");
    }

    get userDropdown() {
        return By.xpath("//ul[contains(@class, 'user-nav')]/..");
    }

    get btnProfile() {
        return By.xpath("//a[@href='/user/profile']");
    }
}

module.exports = AccountPage;