import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { StudentLoginService } from '../../../core/services/student-login/student-login.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';


@Component({
  selector: 'vojvoj-student-login',
  templateUrl: './student-login.component.html',
  styleUrl: './student-login.component.scss'
})
export class StudentLoginComponent implements OnInit {
  private userLogin = new UserLogin();
  private toastMessage!: Message;

  loginFormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  passwordHide = signal(true);

  constructor(
    private studentLoginServices: StudentLoginService,
    private router: Router,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService
  ) {}

  ngOnInit(): void {}

  hidePasswordEvent(event: MouseEvent) {
    this.passwordHide.set(!this.passwordHide());
    event.stopPropagation();
  }

  async registerValidation() {
    this.userLogin.setUserName(
      this.loginFormGroup.get('userName')?.value?.toString() || ''
    );
    this.userLogin.setPassword(
      this.loginFormGroup.get('password')?.value?.toString() || ''
    );

    const respData = await this.studentLoginServices
      .authenticateUser(this.userLogin)
      .then((resp) => {
        return JSON.parse(resp);
      })
      .catch((error) => {
		this.sessionStorage.clearSessionStorage();
        this.toastMessage = {
          key: 'vojvojToast',
          severity: 'error',
          detail: "Invalid login credentials !",
          life: 2500,
        };
        this.toastMessageService.setToastMessage(this.toastMessage);
        console.error(error);
      });
    if (respData.data.data.token) {
      this.sessionStorage.setAuthToken(respData.data.data.token);
      this.sessionStorage.setAdminUserObj(JSON.stringify(respData.data.data.result.waID));
      this.toastMessage = {
        key: 'vojvojToast',
        severity: 'success',
        detail: "User logged in  successfully.",
        life: 2500,
      };
      this.toastMessageService.setToastMessage(this.toastMessage);
      this.router.navigate(['/student-dashboard']);
    } else {
      this.sessionStorage.clearSessionStorage();
      this.toastMessage = {
        key: 'vojvojToast',
        severity: 'error',
        detail: "Invalid login credentials !",
        life: 2500,
      };
      this.toastMessageService.setToastMessage(this.toastMessage);
    }
  }

  StudentRegister() {
    this.router.navigate(['/student-register'])
  }
}
