import BaseSteps from "./BaseSteps";
import LogInPage from "../pages/LogInPage";
import UserModel from "../../core/models/UserModel";
import AccountSteps from "./AccountSteps";
import { UserContainer } from "../../core/utils/UserContainer";

export default class LogInSteps extends BaseSteps<LogInPage> {

    constructor() {
        super(new LogInPage());
    }

    async enterCredentials(user: UserModel): Promise<this> {
        if (user === undefined)
            user = await UserContainer.getUser();

        await this.inputEmail(user.email);
        await this.inputPassword(user.password);

        return this;
    }

    async showPassword() {
        return await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btlShowPassword));
    }

    async clickSubmit() {
        await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btnSubmit)).catch(async () => {
            return this;
        });
        return new AccountSteps();
    }

    private async inputEmail(email: string) {
        return await this.waitAndSendText(5, await this.getBrowser.findElement(this.page.inpEmail), email);
    }

    private async inputPassword(password: string) {
        return await this.waitAndSendText(5, await this.getBrowser.findElement(this.page.inpPassword), password);
    }

    async isPasswordShown(){
        return await this.getBrowser.findElement(this.page.inpPassword).getAttribute("type") === "text";
    }

    async getAlertMessage() {
        return await this.waitForElement(5, this.getBrowser.findElement(this.page.lblErrorAlertMessage)).then(async (e) => {
            return e.getText();
        })
    }
}