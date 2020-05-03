import UserModel from "../models/UserModel";
import data from "../../resources/configuration.json"

export class UserContainer {
    
    public static async getUser(): Promise<UserModel> {
        return new UserModel(data.email, data.password);
    }
}
