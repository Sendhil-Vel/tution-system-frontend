import { Component, OnInit, AfterViewInit, inject, ViewChild, } from '@angular/core';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { Router } from '@angular/router';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { HttpStatusCode } from 'axios';
import { HeaderMapping } from 'json-to-csv-export';
import { AdminListing } from '../../../core/interfaces/adminlisting.interface';
import { Message } from 'primeng/api';
import { StudentListingsService } from '../../../core/services/student-listings/student-listings.service';
import { AgentListingsService } from '../../../core/services/agent-listings/agent-listings.service';
import { UpdateIsverifyService } from '../../../core/services/update-isverify/update-isverify.service'
import { UpdateIsactiveService } from '../../../core/services/update-isactive/update-isactive.service'
import { UserStatus } from '../../../core/models/user-status/user-status.model';

@Component({
  selector: 'vojvoj-listing-student',
  templateUrl: './listing-student.component.html',
  styleUrl: './listing-student.component.scss'
})
export class ListingStudentComponent implements OnInit {
  private authToken!: String;
  private toastMessage!: Message;
  

  private headers: HeaderMapping[] = [
    {
      key: "userID",
      label: "userID"
    },
    {
      key: "userEmail",
      label: "userEmail"
    },
    {
      key: "userFullName",
      label: "userFullName"
    },
    {
      key: "userDob",
      label: "userDob"
    },
    {
      key: "userAddress",
      label: "userAddress"
    },
    {
      key: "userMobile",
      label: "userMobile"
    },
    {
      key: "userAlternateEmail",
      label: "userAlternateEmail"
    },
    {
      key: "isActive",
      label: "isActive"
    },
    {
      key: "isVerified",
      label: "isVerified"
    }
  ];

  DataListings: AdminListing[] = [];
  noOfRecords: number = 0;
  pageTitle: String = "List of Students";
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;
  AgentDataListings: AdminListing[] = [];
  
  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = [
    'userID',
    'userEmail',
    'userFullname',
    'userDob',
    'userAddress',
    'userMobile',
    'userAlternateEmail',
    'isActive',
    'isVerified'
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private studentListingsService: StudentListingsService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    private toastMessageService: ToastMessageService,
    private agentListingsService: AgentListingsService,
    private updateIsverifyService: UpdateIsverifyService,
    private updateIsactiveService: UpdateIsactiveService,
  ) { }

  async ngOnInit() {
    this.authToken = this.sessionStorage.getAuthToken() || '';

    if (!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      this.router.navigate(['']);
    }
    
    await this.studentListingsService.getStudentListing(this.authToken)
      .then((resp) => {
        const respData = JSON.parse(resp);
        switch (respData.status) {
          case HttpStatusCode.Ok:
            this.DataListings = respData.result;
            break;
          case HttpStatusCode.Unauthorized:
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
            break;

          default:
            break;
        }
      })
      .catch((error) => {
        console.log(error);
      });

    this.dataSource.data = this.DataListings.sort((a, b) => b.userID - a.userID);
    this.noOfRecords = this.DataListings.length;

    await this.agentListingsService.getAgentListing(this.authToken)
      .then((resp) => {
        const respData = JSON.parse(resp);
        switch (respData.status) {
          case HttpStatusCode.Ok:
            this.AgentDataListings = respData.result;
            break;
          case HttpStatusCode.Unauthorized:
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
            break;

          default:
            break;
        }
      })
  }

  ngAfterViewInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  announceSortChange(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  getCheckbox(checkbox: any) {
    console.log(checkbox.value)
  }

  async updateverified(curStatus: string, userid: number) {
    var UserStatusObj = new UserStatus();
    UserStatusObj.setUserId(userid);
    UserStatusObj.setCurrentStatus(curStatus);
    UserStatusObj.setRequestType("Admin")
    await this.updateIsverifyService
      .authenticateUser(UserStatusObj)
      .then((resp: any) => {
        this.ngOnInit();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
  async updateisActive(curStatus: string, userid: number) {
    var UserStatusObj = new UserStatus();
    UserStatusObj.setUserId(userid);
    UserStatusObj.setCurrentStatus(curStatus);
    UserStatusObj.setRequestType("Student")
    await this.updateIsactiveService
      .authenticateUser(UserStatusObj)
      .then((resp: any) => {
        this.ngOnInit();
      })
      .catch((error: any) => {
        console.log(error);
      });
  }
}
