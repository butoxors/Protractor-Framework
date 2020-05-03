import HomeSteps from "../pageObject/steps/HomeSteps";
import { assert } from "chai"
import { browser } from "protractor";
import data from "../resources/configuration.json";
import { UserContainer } from "../core/utils/UserContainer";

const homeSteps = new HomeSteps();

describe('Authorization page', () => {
    it('(Welcome back!)', async () => {
        let user = await UserContainer.getUser();
        
        assert.equal(await browser.getCurrentUrl(), data.url);

        let logInSteps = await homeSteps.clickLogIn();
        await logInSteps.enterCredentials(user);
        await logInSteps.showPassword();

        assert.isTrue(await logInSteps.isPasswordShown());

        let accountSteps = await logInSteps.clickSubmit();

        assert.equal((await accountSteps.getUserName()).toLowerCase(), user.email.toLowerCase());

        await accountSteps.clickAccount();

        assert.isTrue(await accountSteps.dropDownIsPresence());
    });
});
