import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { TutorRegisterService } from '../../../core/services/tutor-register/tutor-register.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'vojvoj-create-tutor',
  templateUrl: './create-tutor.component.html',
  styleUrl: './create-tutor.component.scss'
})
export class CreateTutorComponent implements OnInit  {
  pageTitle: string = "Create Tutor";
  private authToken!: String;
  private userLogin = new UserLogin();
  private toastMessage!: Message;

  AdminCreateFormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  passwordHide = signal(true);

  constructor(
    private tutorRegisterService : TutorRegisterService,
    private router: Router,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService
  ) { }

  async ngOnInit() {
    this.authToken = this.sessionStorage.getAuthToken() || '';
    console.log("asdasdtest");
    console.log(this.authToken);
    if (!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      console.log("asdasd");
      this.router.navigate(['']);
    }
  }

  hidePasswordEvent(event: MouseEvent) {
    this.passwordHide.set(!this.passwordHide());
    event.stopPropagation();
  }

  async formValidation() {
    this.userLogin.setUserName(
      this.AdminCreateFormGroup.get('userName')?.value?.toString() || ''
    );
    this.userLogin.setPassword(
      this.AdminCreateFormGroup.get('password')?.value?.toString() || ''
    );

    const respData = await this.tutorRegisterService
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
          this.toastMessage = {
            key: 'vojvojToast',
            severity: 'error',
            detail: "Tutor created Successfully",
            life: 2500,
          };
          this.toastMessageService.setToastMessage(this.toastMessage);
        }
      })
      .catch((error) => {
        this.toastMessage = {
          key: 'vojvojToast',
          severity: 'error',
          detail: "Something went wrong please try again !",
          life: 2500,
        };
        this.toastMessageService.setToastMessage(this.toastMessage);
        console.error(error);
      });
  }
}
