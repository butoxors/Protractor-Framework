import UserModel from "./UserModel";

export default class UserProfileModel extends UserModel {

    readonly name: string;
    readonly phone: string;
    readonly address: string;
    readonly supportPin: string;
    readonly newsletter: boolean;

    constructor(name: string, email: string, phone: string, address: string, supportPin: string, newsletter: boolean) {
        super(email, "");
        this.name = name;
        this.phone = phone;
        this.address = address;
        this.supportPin = supportPin;
        this.newsletter = newsletter;
    }
}