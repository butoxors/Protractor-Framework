import BaseSteps from "./BaseSteps";
import HomePage from "../pages/HomePage";
import LogInSteps from "./LogInSteps";

export default class HomeSteps extends BaseSteps<HomePage> {

    constructor() {
        super(new HomePage());
    }

    async clickLogIn() {
        return await this.waitAndClick(5, await this.getBrowser.findElement(this.page.btnAccount)).then(async () => {
            HomeSteps.LOG.info("Navigate to " + await this.getBrowser.getCurrentUrl());
            return new LogInSteps();
        });
    }
}