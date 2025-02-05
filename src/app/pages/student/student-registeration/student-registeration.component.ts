import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { StudentRegisterDefaultService } from '../../../core/services/student-register-default/student-register-default.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'vojvoj-student-registeration',
  templateUrl: './student-registeration.component.html',
  styleUrl: './student-registeration.component.scss'
})
export class StudentRegisterationComponent {

  private userLogin = new UserLogin();
  private toastMessage!: Message;

  registerFormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  passwordHide = signal(true);

  constructor(
    private studentRegisterDefaultServices: StudentRegisterDefaultService,
    private router: Router,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService
  ) { }

  ngOnInit(): void { }

  hidePasswordEvent(event: MouseEvent) {
    this.passwordHide.set(!this.passwordHide());
    event.stopPropagation();
  }

  async loginValidation() {
    this.userLogin.setUserName(
      this.registerFormGroup.get('userName')?.value?.toString() || ''
    );
    this.userLogin.setPassword(
      this.registerFormGroup.get('password')?.value?.toString() || ''
    );

    const respData = await this.studentRegisterDefaultServices
      .authenticateUser(this.userLogin)
      .then((resp) => {
        if (resp.status != 200) {
          this.toastMessage = {
            key: 'vojvojToast',
            severity: 'error',
            detail: resp.response.data.data.message + " !",
            life: 2500,
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
          return;
        } else {
          this.sessionStorage.clearSessionStorage();
          this.toastMessage = {
            key: 'vojvojToast',
            severity: 'error',
            detail: "Registeration Successful",
            life: 2500,
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
        }
      })
      .catch((error) => {
        this.sessionStorage.clearSessionStorage();
        this.toastMessage = {
          key: 'vojvojToast',
          severity: 'error',
          detail: "Something went wrong please try again !",
          life: 2500,
        };
        this.toastMessageService.setToastMessage(this.toastMessage);
        // console.error(error);
      });
  }
}
