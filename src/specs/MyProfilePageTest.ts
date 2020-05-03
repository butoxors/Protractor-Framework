import HomeSteps from "../pageObject/steps/HomeSteps";
import { assert } from "chai"
import { UserContainer } from "../core/utils/UserContainer";
import UserProfileModel from "../core/models/UserProfileModel";
import UserModel from "../core/models/UserModel";
import LogInSteps from "../pageObject/steps/LogInSteps";

const homeSteps = new HomeSteps();
let userProfile: UserProfileModel;
let user: UserModel;
describe('My profile page.', () => {

    it('Pre-condition', async () => {
        user = await UserContainer.getUser();
        
        let logInSteps = await homeSteps.clickLogIn();
        await logInSteps.enterCredentials(user);
        let accountSteps = await logInSteps.clickSubmit();
        await accountSteps.clickAccount();
        let profileSteps = await accountSteps.clickProfile();

        userProfile = new UserProfileModel(
            await profileSteps.getName(),
            await profileSteps.getEmail(),
            await profileSteps.getPhone(),
            await profileSteps.getAddress(),
            await profileSteps.getSupportPin(),
            await profileSteps.getNewsletterState()
        );

        await accountSteps.clickAccount();
        await accountSteps.clickLogOut();
    })

    it('Client area', async () => {
        let logInSteps = new LogInSteps();

        await logInSteps.enterCredentials(user);
        let accountSteps = await logInSteps.clickSubmit();
        await accountSteps.clickAccount();
        let profileSteps = await accountSteps.clickProfile();

        assert.equal(await profileSteps.getName(), userProfile.name);
        assert.equal(await profileSteps.getEmail(), userProfile.email);
        assert.equal(await profileSteps.getAddress(), userProfile.address);
        assert.equal(await profileSteps.getPhone(), userProfile.phone);
        assert.equal(await profileSteps.getSupportPin(), userProfile.supportPin);
        assert.equal(await profileSteps.getNewsletterState(), userProfile.newsletter);
    });
});
