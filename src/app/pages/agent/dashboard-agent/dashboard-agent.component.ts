import { Component, OnInit } from '@angular/core';
import { UserLoginService } from '../../../core/services/user-login/user-login.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';
import { Router } from '@angular/router';
import { DashboardService } from '../../../core/services/dashboard/dashboard.service';
import { ToastMessageService } from '../../../shared/services/toast-message/toast-message.service';
import { HttpStatusCode } from 'axios';
import { Dashboard } from '../../../core/interfaces/dashboard.interface';
import { Message } from 'primeng/api';

@Component({
  selector: 'vojvoj-dashboard-agent',
  templateUrl: '././dashboard-agent.component.html',
  styleUrl: '././dashboard-agent.component.scss'
})
export class DashboardAgentComponent implements OnInit {

  private authToken!: String;
  
  dashboard!: Dashboard;
  toastMessage!: Message;

  userOneDay!: number;
  totalUser!: number;
  postOneDay!: number;
  totalPost!: number;
  cashoutPaid!: string;
  cashoutUnpaid!: string;

  constructor(
    private dashboardService: DashboardService,
    private sessionStorage: SessionStorageService,
    private router: Router,
    private toastMessageService: ToastMessageService
  ) {}

  async ngOnInit() {
    this.authToken = this.sessionStorage.getAuthToken() || '';

    if(!this.authToken) {
      this.sessionStorage.setAuthToken('');
      console.error('Authentication required!');
      this.router.navigate(['']);
    }

    await this.dashboardService.getDashboard(this.authToken)
    .then((resp) => {
      const respData = JSON.parse(resp);
      switch(respData.status) {
        case HttpStatusCode.Ok:
          this.dashboard = respData.data.data.result;
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
      console.error(error);
    });

    this.userOneDay = this.dashboard.useroneday;
    this.totalUser = this.dashboard.totaluser;
    this.postOneDay = this.dashboard.postoneday;
    this.totalPost = this.dashboard.totalpost;
    this.cashoutPaid = this.dashboard.cashoutpaid;
    this.cashoutUnpaid = this.dashboard.cashoutunpaid;
  }

}

