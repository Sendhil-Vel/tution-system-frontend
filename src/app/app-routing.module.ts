import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPages } from './pages/admin/login/login.pages';
import { DashboardPage } from './pages/admin/dashboard/dashboard.page';
import { UserProfilesPage } from './pages/user-profiles/user-profiles.page';
import { ActiveUserCountPages } from './pages/other/active-user-count/active-user-count.pages';
import { UserLastActiveDatePages } from './pages/other/user-last-active-date/user-last-active-date.pages';
import { MonthlyActiveUserCountPages } from './pages/other/monthly-active-user-count/monthly-active-user-count.pages';
import { PostListingPages } from './pages/other/post-listing/post-listing.pages';
import { MonthlyTokenPurchaseCountPages } from './pages/other/monthly-token-purchase-count/monthly-token-purchase-count.pages';
import { UserCashOutPages } from './pages/other/user-cash-out/user-cash-out.pages';
import { UserSubscriptionInfoPages } from './pages/user-subscription-info/user-subscription-info.pages';
import { CashoutWalletBalancePages } from './pages/other/cashout-wallet-balance/cashout-wallet-balance.pages';
import { AdminUserUpdatePage } from './pages/admin-user-update/admin-user-update.page';
import { DailyDonationsPage } from './pages/other/daily-donations/daily-donations.page';
import { AgentLoginComponent } from './pages/agent/agent-login/agent-login.component';
import { TutorLoginComponent } from './pages/tutor/tutor-login/tutor-login.component';
import { StudentLoginComponent } from './pages/student/student-login/student-login.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { DashboardAgentComponent } from './pages/agent/dashboard-agent/dashboard-agent.component';
import { DashboardTutorComponent } from './pages/tutor/dashboard-tutor/dashboard-tutor.component';
import { DashboardStudentComponent } from './pages/student/dashboard-student/dashboard-student.component';
import { ListingAdminComponent } from './pages/admin/listing-admin/listing-admin.component'
import { ListingAgentComponent } from './pages/admin/listing-agent/listing-agent.component'
import { ListingStudentComponent } from './pages/admin/listing-student/listing-student.component'
import { ListingTutorComponent } from './pages/admin/listing-tutor/listing-tutor.component'
import { CreateAdminComponent } from './pages/admin/create-admin/create-admin.component'
import { StudentRegisterComponent } from './pages/student/student-register/student-register.component'
import { TutorRegisterComponent } from './pages/tutor/tutor-register/tutor-register.component';
import { StudentRegisterationComponent } from './pages/student/student-registeration/student-registeration.component';
import { CreateAgentComponent } from './pages/admin/create-agent/create-agent.component';
import { CreateStudentComponent } from './pages/admin/create-student/create-student.component';
import { CreateTutorComponent } from './pages/admin/create-tutor/create-tutor.component';
import { StudentProfilesComponent } from './pages/student/student-profiles/student-profiles.component';
import { TutorProfilesComponent } from './pages/tutor/tutor-profiles/tutor-profiles.component';

const routes: Routes = [
  { path: '', component: HomePageComponent, data: { title: 'Tution System Home Page' } },
  { path: 'admin-login', component: LoginPages, data: { title: 'Admin Login' } },
  { path: 'dashboard', component: DashboardPage, data: { title: 'Admin Dashboard' } },
  { path: 'admin-admin-listing', component: ListingAdminComponent, data: { title: 'Admin Admin Listing' } },
  { path: 'admin-agent-listing', component: ListingAgentComponent, data: { title: 'Admin Agent Listing' } },
  { path: 'admin-student-listing', component: ListingStudentComponent, data: { title: 'Admin Student Listing' } },
  { path: 'admin-tutor-listing', component: ListingTutorComponent, data: { title: 'Admin Tutor Listing' } },
  { path: 'admin-create-admin', component: CreateAdminComponent, data: { title: 'Admin Create Admin' } },
  { path: 'admin-create-agent', component: CreateAgentComponent, data: { title: 'Admin Create Agent' } },
  { path: 'admin-create-student', component: CreateStudentComponent, data: { title: 'Admin Create Student' } },
  { path: 'admin-create-tutor', component: CreateTutorComponent, data: { title: 'Admin Create Tutor' } },

  { path: 'agent-login', component: AgentLoginComponent, data: { title: 'Agent Login' } },
  { path: 'agent-dashboard', component: DashboardAgentComponent, data: { title: 'Agent Dashboard' } },

  { path: 'tutor-login', component: TutorLoginComponent, data: { title: 'Tutor Login' } },
  { path: 'tutor-dashboard', component: DashboardTutorComponent, data: { title: 'Tutor Dashboard' } },
  { path: 'tutor-register', component: TutorRegisterComponent, data: { title: 'Tutot Register' } },
  { path: 'tutor-profiles', component: TutorProfilesComponent, data: { title: 'Tutor Profiles'}},

  { path: 'student-login', component: StudentLoginComponent, data: { title: 'Student Login' } },
  { path: 'student-dashboard', component: DashboardStudentComponent, data: { title: 'Student Dashboard' } },
  { path: 'student-registera', component: StudentRegisterComponent, data: { title: 'Student Register' } },
  { path: 'student-register', component: StudentRegisterationComponent, data: { title: 'Student Register' } },
  { path: 'student-profiles', component: StudentProfilesComponent, data: {title: 'Student Profiles'}},

  { path: 'user-profiles', component: UserProfilesPage, data: { title: 'User Profiles' } },
  { path: 'active-user-counts', component: ActiveUserCountPages, data: { title: 'Active User Count' } },
  { path: 'user-last-active-date', component: UserLastActiveDatePages, data: { title: 'User Last Active Date' } },
  { path: 'comming-soon', component: MonthlyActiveUserCountPages, data: { title: 'Comming soon' } },
  { path: 'post-list', component: PostListingPages, data: { title: 'Post List' } },
  { path: 'monthly-token-purchase-count', component: MonthlyTokenPurchaseCountPages, data: { title: 'Monthly Token Purchase Count' } },
  { path: 'user-cash-out', component: UserCashOutPages, data: { title: 'User Cash Out' } },
  { path: 'user-subscription-info', component: UserSubscriptionInfoPages, data: { title: 'User Subscription Info' } },
  { path: 'cashout-wallet-balance', component: CashoutWalletBalancePages, data: { title: 'Cashout Wallet Balance' } },
  { path: 'my-profile-info', component: AdminUserUpdatePage, data: { title: 'Admin User Update' } },
  // { path: 'flagged-post', component: FlaggedPostPage, data: { title: 'Flagged Post' } },
  { path: 'daily-donations', component: DailyDonationsPage, data: { title: 'Daily Donations' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
