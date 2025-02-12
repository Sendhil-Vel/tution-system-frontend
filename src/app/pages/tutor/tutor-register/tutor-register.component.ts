import { Component, inject, OnInit, signal } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { TutorRegisterDefaultService } from '../../../core/services/tutor-register-default/tutor-register-default.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'vojvoj-tutor-register',
  templateUrl: './tutor-register.component.html',
  styleUrl: './tutor-register.component.scss'
})
export class TutorRegisterComponent {
  constructor(
    private tutorRegisterDefaultServices: TutorRegisterDefaultService,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService,
    private _formBuilder: FormBuilder,
  ) {
    this.firstFormGroup = this._formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
    });

    this.secondFormGroup = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      citizenship: ['', Validators.required],
      dateOfBirth: ['', Validators.required],
      gender: ['', Validators.required],
      race: ['', Validators.required],
      postalCode: ['', Validators.required],
      mobileNumber: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
      bankOption: ['', Validators.required],
      bankAccountNumber: ['', [Validators.required, Validators.pattern(/^\d{8,}$/)]],
    });
    this.thirdFormGroup = this._formBuilder.group({});
  }

  private toastMessage!: Message;
  private userLogin = new UserLogin();

  registerFormGroup = new FormGroup({
    userName: new FormControl(''),
    password: new FormControl(''),
  });

  firstFormGroup: any;
  secondFormGroup: any;
  thirdFormGroup: any;

  isLinear = false;
  passwordHide = signal(true);
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  subjectsList: any;
  categories: any;
  expandedIndex = 0;


  ngOnInit() {
    this.loadSubjects();
  }

  loadSubjects() {
    this.subjectsList = [
      {
        category: 'preSchool',
        description: 'Test description testttttt',
        subjects: [
          { id: 1, name: 'English' },
          { id: 2, name: 'Math' },
          { id: 3, name: 'Science' },
          { id: 4, name: 'Chinese' },
          { id: 5, name: 'Phonics' },
          { id: 6, name: 'Creative Writing' },
          { id: 7, name: 'Tamil' },
          { id: 8, name: 'Malay' },
          { id: 9, name: 'Art' },
          { id: 10, name: 'Hindi' }
        ]
      },
      {
        category: 'primary',
        description: 'primary',
        subjects: [
          { id: 11, name: 'English' },
          { id: 12, name: 'Math' },
          { id: 13, name: 'Science' },
          { id: 14, name: 'Chinese' }
        ]
      },
      {
        category: 'lowerSecondary',
        description: 'lowerSecondary',
        subjects: [
          { id: 15, name: 'English' },
          { id: 16, name: 'Math' },
          { id: 17, name: 'Science' },
          { id: 18, name: 'Chinese' },
          { id: 19, name: 'Physics' },
          { id: 20, name: 'Biology' },
          { id: 21, name: 'History' }
        ]
      },
      {
        category: 'ip',
        description: 'ip',
        subjects: [
          { id: 22, name: 'English' },
          { id: 23, name: 'Math' },
          { id: 24, name: 'Science' },
          { id: 25, name: 'Physics' },
          { id: 26, name: 'Chemistry' },
          { id: 27, name: 'Economics' }
        ]
      }
    ]

    // this.categories = Object.keys(this.subjectsList);

    // this.categories.forEach((category: string) => {
    //   const formArray = this._formBuilder.array([]);
    //   this.subjectsList[category].forEach(() => formArray.push(new FormControl(false)));
    //   this.thirdFormGroup.addControl(category, formArray);
    // });
  }

  getFormArray(category: string): FormArray {
    return this.thirdFormGroup.get(category) as FormArray<FormControl>;
  }

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

    const respData = await this.tutorRegisterDefaultServices
      .authenticateUser(this.userLogin)
      .then((resp) => {
        console.log(resp);
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
          detail: "Invalid credentials !",
          life: 2500,
        };
        this.toastMessageService.setToastMessage(this.toastMessage);
        // console.error(error);
      });
  }
}
