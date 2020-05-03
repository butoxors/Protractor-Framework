import { By } from "protractor";

export default abstract class BasePage {

    get btnAccount() {
        return By.xpath("//i[contains(@class, 'user-circle')]/..");
    }
}