import { Component, OnInit, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../core/services/session-storage/session-storage.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminUserUpdate } from '../../core/models/admin-user-update/admin-user-update.model';
import { AdminUserUpdateService } from '../../core/services/admin-user-update/admin-user-update.service';
import { HttpStatusCode } from 'axios';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../shared/services/toast-message/toast-message.service';

@Component({
  selector: 'vojvoj-admin-user-update',
  templateUrl: './admin-user-update.page.html',
  styleUrl: './admin-user-update.page.scss'
})
export class AdminUserUpdatePage implements OnInit {

  private authToken!: String;
  private adminUserName: string = '';
  private isNameEdited: boolean = false;

  toastMessage!: Message;

  adminUserUpdateFg: FormGroup = new FormGroup({
    adminUserName: new FormControl({value: '', disabled: true}, [Validators.minLength(4)]),
    currentPassword: new FormControl('', [Validators.minLength(4), Validators.maxLength(40)]),
    newPassword: new FormControl('', [Validators.minLength(4), Validators.maxLength(40)]),
    confirmNewPassword: new FormControl('', [Validators.minLength(4), Validators.maxLength(40)])
  });

  currentPasswordHide = signal(true);
  newPasswordHide = signal(true);
  confirmNewPasswordHide = signal(true);

  constructor(
    private sessionStorage: SessionStorageService,
    private router: Router,
    private adminUserUpdateService: AdminUserUpdateService,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit(): void {
    this.authToken = this.sessionStorage.getAuthToken() || '';

    if(!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      this.router.navigate(['']);
    }

    this.adminUserName = this.sessionStorage.getAdminUserName()!.toString();
    this.adminUserUpdateFg.controls['adminUserName'].setValue(this.adminUserName);
  }

  hideCurrentPasswordEvent(event: MouseEvent) {
    this.currentPasswordHide.set(!this.currentPasswordHide());
    event.stopPropagation();
  }

  hideNewPasswordEvent(event: MouseEvent) {
    this.newPasswordHide.set(!this.newPasswordHide());
    event.stopPropagation();
  }

  hideConfirmNewPasswordEvent(event: MouseEvent) {
    this.confirmNewPasswordHide.set(!this.confirmNewPasswordHide());
    event.stopPropagation();
  }

  toggleUserNameEditEvent() {
    const fc = this.adminUserUpdateFg.controls['adminUserName']; 
    if(fc.disabled) {
      this.isNameEdited = true;
      fc.setValidators([Validators.required]);
      return fc.enable();
    }
    this.isNameEdited = false;
    this.adminUserUpdateFg.controls['adminUserName'].setValue(this.adminUserName);
    fc.removeValidators([Validators.required]);
    return fc.disable();
  }

  async updateAdminUserData() {

    let adminUserInfo = new AdminUserUpdate();

    adminUserInfo.setAdminUserId(this.sessionStorage.getAdminUserId());

    if(this.isNameEdited) {
      adminUserInfo.setAdminUserName(this.adminUserUpdateFg.controls['adminUserName'].value.toString());
    } else {
      adminUserInfo.setAdminUserName(this.adminUserName);
    }

    if(this.adminUserUpdateFg.controls['currentPassword'].value) {
      adminUserInfo.setCurrentPassword(this.adminUserUpdateFg.controls['currentPassword'].value.toString());
      let newPass = this.adminUserUpdateFg.controls['newPassword'];
      let  confNewPass = this.adminUserUpdateFg.controls['confirmNewPassword'];
      if(newPass.value && confNewPass.value) {
        if(newPass.value.toString() === confNewPass.value.toString()) {
          adminUserInfo.setNewPassword(newPass.value.toString());
        }
      }
    }

    await this.adminUserUpdateService.updateAdminUser(this.authToken, adminUserInfo)
    .then((resp) => {
      const response = JSON.parse(resp);
      switch (response.status) {
        case HttpStatusCode.Ok:
          this.sessionStorage.setAdminUserName(adminUserInfo.getAdminUserName());
          this.adminUserName = adminUserInfo.getAdminUserName();
          this.isNameEdited = false;
          this.toggleUserNameEditEvent();
          this.toastMessage = { 
            key: 'vojvojToast',
            severity: 'success',
            detail: response.data.data.message,
            life: 1500
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
          break;
      
        default:
          break;
      }
    }      
    )
    .catch((error) => {
      console.error(error);
    });

  }

}
