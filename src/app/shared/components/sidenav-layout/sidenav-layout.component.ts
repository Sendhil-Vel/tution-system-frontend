import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../core/interfaces/menu-item.interface';
import { UserLogoutService } from '../../../core/services/user-logout/user-logout.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'vojvoj-sidenav-layout',
  templateUrl: './sidenav-layout.component.html',
  styleUrl: './sidenav-layout.component.scss',
})
export class SidenavLayoutComponent implements OnInit {

  private authToken!: String;

  menuItems: MenuItem[] | undefined;
  bottomMenuItems: MenuItem[] | undefined;

  constructor(
    private router: Router,
    private sessionStorage: SessionStorageService,
    private userLogoutService: UserLogoutService
  ) {}

  ngOnInit(): void {
    this.authToken = this.sessionStorage.getAuthToken() || '';
    
    this.menuItems = [
      {
        label: "Dashboard",
        type: "route",
        routeTo: "/dashboard"
      },
      {
        label: "Admin Listing",
        type: "route",
        routeTo: "/admin-admin-listing"
      },
      {
        label: "Create Admin",
        type: "route",
        routeTo: "/admin-create-admin"
      },
      {
        label: "Agent Listing",
        type: "route",
        routeTo: "/admin-agent-listing"
      },
      {
        label: "Create Agent",
        type: "route",
        routeTo: "/admin-create-agent"
      },
      {
        label: "Tutor Listing",
        type: "route",
        routeTo: "/admin-tutor-listing"
      },
      {
        label: "Creator Tutor",
        type: "route",
        routeTo: "/admin-create-tutor"
      },
      {
        label: "Student Listing",
        type: "route",
        routeTo: "/admin-student-listing"
      },
      {
        label: "Create Student",
        type: "route",
        routeTo: "/admin-create-student"
      },
      // {
      //   label: "User Cash Out",
      //   type: "route",
      //   routeTo: "/user-cash-out"
      // },
      // {
      //   label: "User Subscription Info",
      //   type: "route",
      //   routeTo: "/user-subscription-info"
      // },
      // {
      //   label: "Cashout Wallet Balance",
      //   type: "route",
      //   routeTo: "/cashout-wallet-balance"
      // },
      // {
      //   label: "Flagged Posts",
      //   type: "route",
      //   routeTo: "/flagged-post"
      // },
      // {
      //   label: "Daily Donations",
      //   type: "route",
      //   routeTo: "/daily-donations"
      // }
    ];    

    this.bottomMenuItems = [
      {
        label: 'My Profile',
        iconClass: 'pi pi-cog',
        type: 'route',
        routeTo: '/my-profile-info'
      }
    ];
  }

  async logoutSession() {
    await this.userLogoutService.logoutSession(this.authToken);
    this.sessionStorage.clearSessionStorage();
    this.router.navigate(['']);
  }
}
