import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuItem } from '../../../core/interfaces/menu-item.interface';
import { UserLogoutService } from '../../../core/services/user-logout/user-logout.service';
import { SessionStorageService } from '../../../core/services/session-storage/session-storage.service';


@Component({
  selector: 'vojvoj-sidenav-student',
  templateUrl: './sidenav-student.component.html',
  styleUrl: './sidenav-student.component.scss'
})
export class SidenavStudentComponent implements OnInit {
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
        routeTo: "/student-dashboard"
      },
      {
        label: "My Tutor Listing",
        type: "route",
        routeTo: "/comming-soon"
      }
    ];    

    this.bottomMenuItems = [
      {
        label: 'My Profile',
        iconClass: 'pi pi-cog',
        type: 'route',
        routeTo: '/student-profiles'
      }
    ];
  }

  async logoutSession() {
    await this.userLogoutService.logoutSession(this.authToken);
    this.sessionStorage.clearSessionStorage();
    this.router.navigate(['']);
  }
}
