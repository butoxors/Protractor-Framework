
export default class RandomUtils {
    
    private constructor(){}

    static get randomPassword() {
        return Math.random().toString(36).slice(-8);
    }

    static get randomEmail() {
        return RandomUtils.randomPassword + "@gmail.com";
    }
}