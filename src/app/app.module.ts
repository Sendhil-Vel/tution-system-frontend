import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { NgMaterialModulesModule } from './shared/modules/ng-material-modules.module';
import { PrimeNgModulesModule } from './shared/modules/prime-ng-modules.module';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatExpansionModule} from '@angular/material/expansion';
import { DashboardPage } from './pages/admin/dashboard/dashboard.page';
import { SidenavLayoutComponent } from './shared/components/sidenav-layout/sidenav-layout.component';
import { UserProfilesPage } from './pages/user-profiles/user-profiles.page';
import { ActiveUserCountPages } from './pages/other/active-user-count/active-user-count.pages';
import { UserLastActiveDatePages } from './pages/other/user-last-active-date/user-last-active-date.pages';
import { MonthlyActiveUserCountPages } from './pages/other/monthly-active-user-count/monthly-active-user-count.pages';
import { PostListingPages } from './pages/other/post-listing/post-listing.pages';
import { MonthlyTokenPurchaseCountPages } from './pages/other/monthly-token-purchase-count/monthly-token-purchase-count.pages';
import { LoginPages } from './pages/admin/login/login.pages';
import { UserCashOutPages } from './pages/other/user-cash-out/user-cash-out.pages';
import { UserSubscriptionInfoPages } from './pages/user-subscription-info/user-subscription-info.pages';
import { CashoutWalletBalancePages } from './pages/other/cashout-wallet-balance/cashout-wallet-balance.pages';
import { MessageService } from 'primeng/api';
import { AdminUserUpdatePage } from './pages/admin-user-update/admin-user-update.page';
// import { FlaggedPostPage } from './pages/flagged-post/flagged-post.page';
import { MediaFileViewComponent } from './shared/components/media-file-view/media-file-view.component';
import { DailyDonationsPage } from './pages/other/daily-donations/daily-donations.page';
import { AgentLoginComponent } from './pages/agent/agent-login/agent-login.component';
import { TutorLoginComponent } from './pages/tutor/tutor-login/tutor-login.component';
import { StudentLoginComponent } from './pages/student/student-login/student-login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SidenavAgentComponent } from './shared/components/sidenav-agent/sidenav-agent.component';
import { SidenavTutorComponent } from './shared/components/sidenav-tutor/sidenav-tutor.component';
import { SidenavStudentComponent } from './shared/components/sidenav-student/sidenav-student.component';
import { DashboardAgentComponent } from './pages/agent/dashboard-agent/dashboard-agent.component';
import { DashboardTutorComponent } from './pages/tutor/dashboard-tutor/dashboard-tutor.component';
import { DashboardStudentComponent } from './pages/student/dashboard-student/dashboard-student.component';
import { FlaggedPostPage } from './pages/student/flagged-post/flagged-post.page';
import { StudentRegisterationComponent } from './pages/student/student-registeration/student-registeration.component';
import { ListingAgentComponent } from './pages/admin/listing-agent/listing-agent.component';
import { ListingAdminComponent } from './pages/admin/listing-admin/listing-admin.component';
import { ListingStudentComponent } from './pages/admin/listing-student/listing-student.component';
import { ListingTutorComponent } from './pages/admin/listing-tutor/listing-tutor.component';
import { CreateAdminComponent } from './pages/admin/create-admin/create-admin.component';
import { StudentRegisterComponent } from './pages/student/student-register/student-register.component';
import { TutorRegisterComponent } from './pages/tutor/tutor-register/tutor-register.component';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSelectModule } from '@angular/material/select';
import { CreateAgentComponent } from './pages/admin/create-agent/create-agent.component';
import { CreateStudentComponent } from './pages/admin/create-student/create-student.component';
import { CreateTutorComponent } from './pages/admin/create-tutor/create-tutor.component';
import { StudentProfilesComponent } from './pages/student/student-profiles/student-profiles.component';
import { TutorProfilesComponent } from './pages/tutor/tutor-profiles/tutor-profiles.component';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    DashboardPage,
    SidenavLayoutComponent,
    UserProfilesPage,
    ActiveUserCountPages,
    UserLastActiveDatePages,
    MonthlyActiveUserCountPages,
    PostListingPages,
    MonthlyTokenPurchaseCountPages,
    LoginPages,
    UserCashOutPages,
    UserSubscriptionInfoPages,
    CashoutWalletBalancePages,
    AdminUserUpdatePage,
    FlaggedPostPage,
    MediaFileViewComponent,
    DailyDonationsPage,
    AgentLoginComponent,
    TutorLoginComponent,
    StudentLoginComponent,
    HomePageComponent,
    SidenavAgentComponent,
    SidenavTutorComponent,
    SidenavStudentComponent,
    DashboardAgentComponent,
    DashboardTutorComponent,
    DashboardStudentComponent,
    StudentRegisterationComponent,
    ListingAgentComponent,
    ListingAdminComponent,
    ListingStudentComponent,
    ListingTutorComponent,
    CreateAdminComponent,
    StudentRegisterComponent,
    TutorRegisterComponent,
    CreateAgentComponent,
    CreateStudentComponent,
    CreateTutorComponent,
    StudentProfilesComponent,
    TutorProfilesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgMaterialModulesModule,
    PrimeNgModulesModule,
    MatCheckboxModule,
    MatSelectModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatExpansionModule,
  ],
  providers: [
    provideAnimationsAsync(),
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
