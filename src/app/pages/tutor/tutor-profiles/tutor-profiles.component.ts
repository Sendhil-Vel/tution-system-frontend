import { Component, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserLogin } from '../../../core/models/user-login/user-login.model';
import { StudentLoginService } from '../../../core/services/student-login/student-login.service';
import { Router } from '@angular/router';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { provideNativeDateAdapter } from '@angular/material/core';
import { TutorProfileModel } from '../../../core/models/tutor-profile/tutor-profile.model'
import { TutorLoginService } from '../../../core/services/tutor-login/tutor-login.service';

@Component({
  selector: 'vojvoj-tutor-profiles',
  templateUrl: './tutor-profiles.component.html',
  styleUrl: './tutor-profiles.component.scss',
  providers: [provideNativeDateAdapter()],
})
export class TutorProfilesComponent implements OnInit {
  hideSingleSelectionIndicator = signal(false);
  tutorProfile = new TutorProfileModel();

  TutorProfileFormGroup = new FormGroup({
    tutorName: new FormControl(''),
    tutorNationality: new FormControl(''),
    tutorDOB: new FormControl(''),
    tutorGender: new FormControl(''),
    postalCode: new FormControl(''),
    phoneNo: new FormControl(''),
    paymentOption: new FormControl(''),
    tutoringPerference: new FormControl(''),
    tutorStandard: new FormControl(''),
    tutorSubject: new FormControl(''),
    tutorExperience: new FormControl(''),
    tutoringLocation: new FormControl(''),
    tutorQualification: new FormControl(''),
    // tutorDocuments: new FormControl(''),
    // tutorPic: new FormControl(''),
  });

  constructor(
    private tutorLoginServices: TutorLoginService,
    private router: Router,
    private sessionStorage: SessionStorageService,
    private toastMessageService: ToastMessageService
  ) { }

  ngOnInit(): void { }

  async profilevalidation() {
    console.log("This");
    this.tutorProfile.settutorName(this.TutorProfileFormGroup.get('tutorName')?.value?.toString() || '');
    this.tutorProfile.settutorNationality(this.TutorProfileFormGroup.get('tutorNationality')?.value?.toString() || '');
    this.tutorProfile.settutorDOB(this.TutorProfileFormGroup.get('tutorDOB')?.value?.toString() || '');
    this.tutorProfile.settutorGender(this.TutorProfileFormGroup.get('tutorGender')?.value?.toString() || '');
    this.tutorProfile.setpostalCode(this.TutorProfileFormGroup.get('postalCode')?.value?.toString() || '');
    this.tutorProfile.setphoneNo(this.TutorProfileFormGroup.get('phoneNo')?.value?.toString() || '');
    this.tutorProfile.setpaymentOption(this.TutorProfileFormGroup.get('paymentOption')?.value?.toString() || '');
    this.tutorProfile.settutoringPerference(this.TutorProfileFormGroup.get('tutoringPerference')?.value?.toString() || '');
    this.tutorProfile.settutorStandard(this.TutorProfileFormGroup.get('tutorStandard')?.value?.toString() || '');
    this.tutorProfile.settutorSubject(this.TutorProfileFormGroup.get('tutorSubject')?.value?.toString() || '');
    this.tutorProfile.settutorExperience(this.TutorProfileFormGroup.get('tutorExperience')?.value?.toString() || '');
    this.tutorProfile.settutoringLocation(this.TutorProfileFormGroup.get('tutoringLocation')?.value?.toString() || '');
    this.tutorProfile.settutorQualification(this.TutorProfileFormGroup.get('tutorQualification')?.value?.toString() || '');

    const respData = await this.tutorLoginServices
      .UpdateUserProfiles(this.tutorProfile)
      .then((resp) => {
        return JSON.parse(resp);
      })
      .catch((error) => { });
  }
}
