import { Component, OnInit, signal , Inject, viewChild} from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { StudentLoginService } from '../../../core/services/student-login/student-login.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { SubjectService } from '../../../core/services/subject/subject.service'
import { Subject } from 'rxjs';
import { SubjectsInterface } from '../../../core/interfaces/subjects.interface';
import { HttpStatusCode } from 'axios';
import { StudentProfile } from '../../../core/models/student-profile/student-profile.model'

@Component({
  selector: 'vojvoj-student-profiles',
  templateUrl: './student-profiles.component.html',
  styleUrl: './student-profiles.component.scss'
})
export class StudentProfilesComponent implements OnInit {
  studentProfile = new StudentProfile();
  hideSingleSelectionIndicator = signal(false);
  private toastMessage!: Message;
  private SubjectListing: SubjectsInterface[] = []
  StudentProfileFormGroup = new FormGroup({
    personName: new FormControl(''),
    usertype: new FormControl(''),                       //Parent / Student
    studentName: new FormControl(''),
    studentGender: new FormControl(''),
    studentAddress: new FormControl(''),
    emailAddress: new FormControl(''),
    subjects: new FormControl(''),
    studentGrade: new FormControl(''),
    classFrequency: new FormControl(''),
    Budget: new FormControl(''),
    timeSlot: new FormControl(''),
    description: new FormControl(''),
  });

  constructor(
    private studentLoginServices: StudentLoginService,
    private router: Router,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService,
    private subjectservice: SubjectService,
    @Inject(DOCUMENT) private _document: Document,
  ) { }

  // ngOnInit(): void {}

  async ngOnInit() {
    this.GetSubjects();
  }

  async GetTimeStlot() {
    var timeslot: string = '';
    timeslot = '';
    var allcheckbox = this._document.querySelectorAll('.timeclsslot');
    console.log(allcheckbox);
    allcheckbox?.forEach((x) => {
      console.log(x);
      var echeck = x as HTMLInputElement 
      console.log(echeck);
      console.log(echeck.id);
      console.log(echeck.checked);
      if (echeck.checked) {
        timeslot = timeslot + "," + echeck.id;
      }
    })
    console.log(timeslot);
    return timeslot;
  }

  async profilevalidation() {
    console.log("This");
    console.log(this.StudentProfileFormGroup.get('studentGender')?.value);
    this.studentProfile.setpersonName(
      this.StudentProfileFormGroup.get('personName')?.value?.toString() || ''
    );
    this.studentProfile.setusertype(this.StudentProfileFormGroup.get('usertype')?.value?.toString() || '');
    this.studentProfile.setstudentName(this.StudentProfileFormGroup.get('studentName')?.value?.toString() || '');
    this.studentProfile.setstudentGender(this.StudentProfileFormGroup.get('studentGender')?.value?.toString() || '');
    this.studentProfile.setstudentAddress(this.StudentProfileFormGroup.get('studentAddress')?.value?.toString() || '');
    this.studentProfile.setemailAddress(this.StudentProfileFormGroup.get('emailAddress')?.value?.toString() || '');
    this.studentProfile.setsubjects(this.StudentProfileFormGroup.get('subjects')?.value?.toString() || '');
    this.studentProfile.setstudentGrade(this.StudentProfileFormGroup.get('studentGrade')?.value?.toString() || '');
    this.studentProfile.setclassFrequency(this.StudentProfileFormGroup.get('classFrequency')?.value?.toString() || '');
    this.studentProfile.setBudget(this.StudentProfileFormGroup.get('Budget')?.value?.toString() || '');
    this.studentProfile.settimeSlot(this.StudentProfileFormGroup.get('timeSlot')?.value?.toString() || '');
    this.studentProfile.setdescription(this.StudentProfileFormGroup.get('description')?.value?.toString() || '');
    var timeslotvaluescode = this.GetTimeStlot();
    console.log(timeslotvaluescode);
    this.studentProfile.settimeSlot((await timeslotvaluescode).toString());

    const respData = await this.studentLoginServices
      .UpdateUserProfiles(this.studentProfile)
      .then((resp) => {
        return JSON.parse(resp);
      })
      .catch((error) => {});

  }

  async GetSubjects() {
    await this.subjectservice
      .GetSubjects()
      .then((resp) => {
        const respData = JSON.parse(resp)
        if (respData.status == HttpStatusCode.Ok) {
          this.SubjectListing = JSON.parse(resp);
        } else {
          if (respData.status == HttpStatusCode.Unauthorized) {
            this.toastMessage = {
              key: 'vojvojToast',
              severity: 'error',
              summary: '401 Unauthorized',
              detail: 'Invalid authentication token, try re-login.',
              life: 2500
            };
            this.toastMessageService.setToastMessage(this.toastMessage);
            this.sessionStorage.setAuthToken('');
            this.router.navigate(['']);
          }
        }
      })
      .catch((error) => {
        this.toastMessage = {
          key: 'vojvojToast',
          severity: 'error',
          detail: "Unable to get Subjects",
          life: 2500,
        };
        this.toastMessageService.setToastMessage(this.toastMessage);
        console.error(error);
      });
    //   if (respData.data.data.token) {
    //     // Show true message
    //   } else {
    //     this.toastMessage = {
    //       key: 'vojvojToast',
    //       severity: 'error',
    //       detail: "Unable to get Subjects",
    //       life: 2500,
    //     };
    //     this.toastMessageService.setToastMessage(this.toastMessage);
    //   }
  }
}
