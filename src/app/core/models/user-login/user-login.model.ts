import { EncryptDecryptService } from "../../services/encrypt-decrypt/encrypt-decrypt.service";

export class UserLogin {

    private userName: String = '';
    private password: string = '';

    private encryptDecryptService = new EncryptDecryptService();

    constructor() {}


    setUserName(userName: String) {
        this.userName = userName;
    }

    getUserName(): String {
        return this.userName;
    }

    setPassword(password: string) {
        this.password = this.encryptDecryptService.encrypt(password);
    }

    getPassword(): string {
        return this.encryptDecryptService.decrypt(this.password);
    }
}
