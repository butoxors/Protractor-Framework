import HomeSteps from "../pageObject/steps/HomeSteps";
import { assert } from "chai"
import { browser } from "protractor";
import data from "../resources/configuration.json";
import UserModel from "../core/models/UserModel";
import RandomUtils from "../core/utils/RandomUtils";

const homeSteps = new HomeSteps();

describe('Authorization page', () => {
    it('Not registered user', async () => {
        const expectedAlertMessage: string = "Uh oh! Email or password is incorrect";

        let user = new UserModel(RandomUtils.randomEmail, RandomUtils.randomPassword);

        assert.equal(await browser.getCurrentUrl(), data.url);

        let logInSteps = await homeSteps.clickLogIn();

        await logInSteps.enterCredentials(user);
        await logInSteps.showPassword();

        assert.isTrue(await logInSteps.isPasswordShown());
        
        await logInSteps.clickSubmit();
        assert.equal(await logInSteps.getAlertMessage(), expectedAlertMessage);
    });
});