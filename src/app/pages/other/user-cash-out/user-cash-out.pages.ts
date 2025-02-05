import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { UserCashOut } from '../../../core/interfaces/user-cash-out.interface';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { UserCashOutService } from '../../../core/services/user-cash-out/user-cash-out.service';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { HttpStatusCode } from 'axios';
import { HeaderMapping } from 'json-to-csv-export';
import { ExportToCsvService } from '../../../core/services/export-to-csv/export-to-csv.service';

@Component({
  selector: 'vojvoj-user-cash-out',
  templateUrl: './user-cash-out.pages.html',
  styleUrl: './user-cash-out.pages.scss'
})
export class UserCashOutPages implements OnInit, AfterViewInit {

  private authToken!: String;
  private toastMessage!: Message;

  private headers: HeaderMapping[] = [
    {
      key: "userID",
      label: "userID"
    },
    {
      key: "userName",
      label: "userName"
    },
    {
      key: "cashoutUsdAmount",
      label: "cashoutUsdAmount"
    },
    {
      key: "stripeEmail",
      label: "stripeEmail"
    },
    {
      key: "stripeID",
      label: "stripeID"
    },
    {
      key: "processStatus",
      label: "processStatus"
    },
    {
      key: "responseCode",
      label: "responseCode"
    },
    {
      key: "processDate",
      label: "processDate"
    }
  ];

  private userCashOut!: UserCashOut[];
  noOfRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = [
    'userID',
    'userName',
    'cashoutUsdAmount',
    'stripeEmail',
    'stripeID',
    'processStatus',
    'responseCode',
    'processDateA'
  ];

  dataSource = new MatTableDataSource();

  constructor(
    private userCashOutService: UserCashOutService,
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

    await this.userCashOutService.getUserCashOut(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch (respData.status) {
        case HttpStatusCode.Ok:
          this.userCashOut = respData.result;
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

    this.dataSource.data = this.userCashOut.sort((a, b) => new Date().setDate(Number.parseInt(b.processDate.replaceAll('-',''))) - new Date().setDate(Number.parseInt(a.processDate.replaceAll('-',''))));
    this.noOfRecords = this.userCashOut.length;
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
      this.userCashOut,
      "vojvoj-user-cashout",
      this.headers
    );
  }



}
