import { LiveAnnouncer } from '@angular/cdk/a11y';
import { AfterViewInit, Component, inject, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { MonthlyActiveUserCount, MonthlyActiveUserCountBackup } from '../../core/interfaces/monthly-active-user-count.interface';
import { MonthlyActiveUserCountService } from '../../core/services/monthly-active-user-count/monthly-active-user-count.service';
import { Router } from '@angular/router';
import { SessionStorageService } from '../../core/services/session-storage/session-storage.service';
import { Message } from 'primeng/api';
import { ToastMessageService } from '../../shared/services/toast-message/toast-message.service';
import { HttpStatusCode } from 'axios';
import { HeaderMapping } from 'json-to-csv-export';
import { ExportToCsvService } from '../../core/services/export-to-csv/export-to-csv.service';

@Component({
  selector: 'vojvoj-monthly-active-user-count',
  templateUrl: './monthly-active-user-count.pages.html',
  styleUrl: './monthly-active-user-count.pages.scss'
})
export class MonthlyActiveUserCountPages implements OnInit, AfterViewInit  {

  private authToken!: String;
  private toastMessage!: Message;

  private headers: HeaderMapping[] = [
    {
      key: "activeMonth",
      label: "activeMonth"
    },
    {
      key: "activeUserCount",
      label: "activeUserCount"
    },
    {
      key: "repeatingUserCount",
      label: "repeatingUserCount"
    },
    {
      key: "retentionPercentage",
      label: "retentionPercentage"
    },
    {
      key: "retentionPercentageModified",
      label: "retentionPercentageModified"
    }
  ];

  monthlyActiveUserCountsbackup: MonthlyActiveUserCountBackup[] = [];
  monthlyActiveUserCounts: MonthlyActiveUserCount[] = [];
  noOfRecords: number = 0;
  tmpdata : number = 0;
  i : number = 0;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  private _liveAnnouncer = inject(LiveAnnouncer);
  displayedColumns: string[] = ['activeMonth', 'repeatingUserCount', 'activeUserCount', 'retentionPercentageModified'];

  dataSource = new MatTableDataSource();

  constructor(
    private monthlyActiveUserCountService: MonthlyActiveUserCountService,
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

    await this.monthlyActiveUserCountService.getMonthlyActiveUserCount(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch (respData.status) {
        case HttpStatusCode.Ok:
          this.monthlyActiveUserCountsbackup = respData.result;
          this.monthlyActiveUserCountsbackup.forEach((valueobj,key) => {
            var obj = {} as MonthlyActiveUserCount
            obj['activeMonth'] = valueobj['activeMonth']
            obj['activeUserCount'] = valueobj['activeUserCount']
            obj['repeatingUserCount'] = valueobj['repeatingUserCount']
            obj['retentionPercentage'] = valueobj['retentionPercentage']
            obj['retentionPercentageModified'] = (0).toString();
            this.monthlyActiveUserCounts.push(obj)
          });
          for (this.i=this.monthlyActiveUserCounts.length-1; this.i >= 0 ; this.i = this.i -1) {
            if (this.tmpdata == 0) {
              this.monthlyActiveUserCounts[this.i].retentionPercentageModified = (0).toString();
              this.tmpdata = this.monthlyActiveUserCounts[this.i].activeUserCount;
            } else {
              this.monthlyActiveUserCounts[this.i].retentionPercentageModified = (((this.monthlyActiveUserCounts[this.i].repeatingUserCount / this.tmpdata) * 100).toFixed(2)).toString() + "%"
              this.tmpdata = this.monthlyActiveUserCounts[this.i].activeUserCount;
            }
          }
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

    this.dataSource.data = this.monthlyActiveUserCounts;
    this.noOfRecords = this.monthlyActiveUserCounts.length;
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
      this.monthlyActiveUserCounts,
      "vojvoj-monthly-rentention-rate",
      this.headers
    );
  }

}
