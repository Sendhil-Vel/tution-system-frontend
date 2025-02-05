import { EncryptDecryptService } from "../../services/encrypt-decrypt/encrypt-decrypt.service";

export class AdminUserUpdate {

    private adminUserId: number = NaN;
    private adminUserName: string = '';
    private currentPassword: string = '';
    private newPassword: string = '';

    private encryptDecryptService = new EncryptDecryptService();

    constructor() {}

    setAdminUserId(adminUserId: number) {
        this.adminUserId = adminUserId;
    }

    getAdminUserId() {
        return this.adminUserId;
    }

    setAdminUserName(adminUserName: string) {
        this.adminUserName = adminUserName;
    }

    getAdminUserName() {
        return this.adminUserName;
    }

    setCurrentPassword(currentPassword: string) {
        this.currentPassword = this.encryptDecryptService.encrypt(currentPassword);
    }

    getCurrentPassword() {
        return this.encryptDecryptService.decrypt(this.currentPassword);
    }

    setNewPassword(newPassword: string) {
        this.newPassword = this.encryptDecryptService.encrypt(newPassword);
    }

    getNewPassword() {
        return this.encryptDecryptService.decrypt(this.newPassword);
    }
}
