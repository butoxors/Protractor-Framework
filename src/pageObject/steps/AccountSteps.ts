import BaseSteps from "./BaseSteps";
import AccountPage from "../pages/AccountPage";
import ProfileSteps from "./ProfileSteps";
import HomeSteps from "./HomeSteps";

export default class AccountSteps extends BaseSteps<AccountPage> {

    constructor() {
        super(new AccountPage());
    }

    async getUserName() {
        return await this.waitForElement(5, await this.getBrowser.findElement(this.page.btnAccount)).then(async (e) => {
            return await e.getText();
        })
    }

    async dropDownIsPresence() {
        return await (await this.getBrowser.findElement(this.page.userDropdown)).isEnabled();
    }

    async clickAccount() {
        return await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btnAccount));
    }

    async clickProfile() {
        return await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btnProfile)).then(async () => {
            return new ProfileSteps();
        })
    }

    async clickLogOut() {
        return await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btnLogOut)).then(async () => {
            return new HomeSteps();
        })
    }
}