import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { UserSubscriptionInfo } from '../../core/interfaces/user-subscription-info.interface';
import { UserSubscriptionInfoService } from '../../core/services/user-subscription-info/user-subscription-info.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../core/services/session-storage/session-storage.service';
import { ToastMessageService } from '../../shared/services/toast-message/toast-message.service';
import { HttpStatusCode } from 'axios';
import { Message } from 'primeng/api';
import { HeaderMapping } from 'json-to-csv-export';
import { ExportToCsvService } from '../../core/services/export-to-csv/export-to-csv.service';

@Component({
  selector: 'vojvoj-user-subscription-info',
  templateUrl: './user-subscription-info.pages.html',
  styleUrl: './user-subscription-info.pages.scss'
})
export class UserSubscriptionInfoPages implements OnInit, AfterViewInit {

  private authToken!: String;
  private toastMessage!: Message;

  private headers: HeaderMapping[] = [
    {
      key: "creatorName",
      label: "creatorName"
    },
    {
      key: "subscriberName",
      label: "subscriberName"
    },
    {
      key: "toSubscribeTokens",
      label: "toSubscribeTokens"
    },
    {
      key: "subscribedDate",
      label: "subscribedDate"
    }
  ];

  private userSubscriptionInfos!: UserSubscriptionInfo[];
  noOfRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = [
    'creatorName',
    'subscriberName',
    'toSubscribeTokens',
    'subscribedDateA'
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private userSubscriptionInfoService: UserSubscriptionInfoService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    private toastMessageService: ToastMessageService,
    private exportToCsvService: ExportToCsvService
  ) {}

  async ngOnInit() {
    
    this.authToken = this.sessionStorage.getAuthToken() || '';

    if(!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      this.router.navigate(['']);
    }

    await this.userSubscriptionInfoService.getUserSubscriptionInfo(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch (respData.status) {
        case HttpStatusCode.Ok:
          this.userSubscriptionInfos = respData.result;
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

    this.dataSource.data = this.userSubscriptionInfos;
    // this.userSubscriptionInfos.sort((a, b) => new Date().setDate(Number.parseInt(b.subscribedDate.replaceAll('-',''))) - new Date().setDate(Number.parseInt(a.subscribedDate.replaceAll('-',''))));
    this.noOfRecords = this.userSubscriptionInfos.length;
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

  exportToCsv() {
    this.toastMessage = { 
      key: 'vojvojToast',
      severity: 'info', 
      summary: 'Exporting data to CSV', 
      detail: 'Generating the CSV file. It will be downloaded shortly!',
      life: 1500
    };
    this.toastMessageService.setToastMessage(this.toastMessage);
    
    this.exportToCsvService.exportToCsv(
      this.userSubscriptionInfos,
      "vojvoj-user-subscription-info",
      this.headers
    );
  }
  
}
