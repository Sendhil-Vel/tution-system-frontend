import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { CashoutWalletBalance } from '../../../core/interfaces/cashout-wallet-balance.interface';
import { CashoutWalletBalanceService } from '../../../core/services/cashout-wallet-balance/cashout-wallet-balance.service';
import { LiveAnnouncer } from '@angular/cdk/a11y';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { HttpStatusCode } from 'axios';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { ExportToCsvService } from '../../../core/services/export-to-csv/export-to-csv.service';
import { HeaderMapping } from 'json-to-csv-export';

@Component({
  selector: 'vojvoj-cashout-wallet-balance',
  templateUrl: './cashout-wallet-balance.pages.html',
  styleUrl: './cashout-wallet-balance.pages.scss'
})
export class CashoutWalletBalancePages implements OnInit, AfterViewInit  {

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
      key: "isPayoutLocked",
      label: "isPayoutLocked"
    },
    {
      key: "cashoutWallet",
      label: "cashoutWallet"
    }
  ];

  cashoutWalletBal!: CashoutWalletBalance[];
  noOfRecords: number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = ['userID', 'userName', 'isPayoutLocked', 'cashoutWallet'];

  dataSource = new MatTableDataSource();

  constructor(
    private cashoutWalletBalanceService: CashoutWalletBalanceService,
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

    await this.cashoutWalletBalanceService.getCashoutWalletBalance(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch (respData.status) {
        case HttpStatusCode.Ok:
          this.cashoutWalletBal = respData.result;
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

    this.dataSource.data = this.cashoutWalletBal;
    this.noOfRecords = this.cashoutWalletBal.length;
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
      this.cashoutWalletBal,
      "vojvoj-cashout-wallet-balance",
      this.headers
    );
  }

}
