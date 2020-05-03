import { By } from "protractor"
import BasePage from "./BasePage";

export default class ProfilePage extends BasePage {
    
    get lblName() {
        return By.xpath("//span[contains(@ng-hide, 'name')]");
    }
    
    get lblEmail() {
        return By.xpath("//span[contains(@ng-hide, 'email')]");
    }
    
    get lblPhone() {
        return By.xpath("//span[contains(@ng-hide, 'phone')]");
    }
    
    get lblAddress() {
        return By.xpath("//span[contains(@ng-hide, 'address')]");
    }
    
    get lblSupportPin() {
        return By.xpath("//div[contains(@ng-class, 'pin')]//span[@class='text ng-binding']");
    }
    
    get lblNewsletter() {
        return By.xpath("//button[contains(@class,'toggle-btn')]");
    }
}

module.exports = ProfilePage;