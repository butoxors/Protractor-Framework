import BaseSteps from "./BaseSteps";
import ProfilePage from "../pages/ProfilePage";

export default class ProfileSteps extends BaseSteps<ProfilePage> {

    constructor() {
        super(new ProfilePage());
    }

    async getName() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblName)).then(async (e) => {
            return await e.getText();
        })
    }
    
    async getEmail() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblEmail)).then(async (e) => {
            return await e.getText();
        })
    }
    
    async getPhone() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblPhone)).then(async (e) => {
            return await e.getText();
        })
    }
    
    async getAddress() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblAddress)).then(async (e) => {
            return await e.getText();
        })
    }
    
    async getSupportPin() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblName)).then(async (e) => {
            return await e.getText();
        })
    }
    
    async getNewsletterState() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.lblName)).then(async (e) => {
            return await e.isSelected();
        })
    }
}