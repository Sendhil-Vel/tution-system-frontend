import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../core/interfaces/menu-item.interface';
import { UserLogoutService } from '../../../core/services/user-logout/user-logout.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';

@Component({
  selector: 'vojvoj-sidenav-agent',
  templateUrl: './sidenav-agent.component.html',
  styleUrl: './sidenav-agent.component.scss'
})
export class SidenavAgentComponent implements OnInit {
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
        routeTo: "/comming-soon"
      },
      {
        label: "Tutor Listing",
        type: "route",
        routeTo: "/comming-soon"
      },
      {
        label: "Creator Tutor",
        type: "route",
        routeTo: "/comming-soon"
      },
      {
        label: "Student Listing",
        type: "route",
        routeTo: "/comming-soon"
      },
      {
        label: "Create Student",
        type: "route",
        routeTo: "/comming-soon"
      },
    ];    

    this.bottomMenuItems = [
      {
        label: 'My Profile',
        iconClass: 'pi pi-cog',
        type: 'route',
        routeTo: '/comming-soon'
      }
    ];
  }

  async logoutSession() {
    await this.userLogoutService.logoutSession(this.authToken);
    this.sessionStorage.clearSessionStorage();
    this.router.navigate(['']);
  }
}
