import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageTractorsComponent } from './manage-tractors/manage-tractors.component';
import { BookingsComponent } from './bookings/bookings.component';
import { CustomersComponent } from './customers/customers.component';
import { PaymentsComponent } from './payments/payments.component';
import { ReportsComponent } from './reports/reports.component';
import { SettingsComponent } from './settings/settings.component';
import { SearchComponent } from './search/search.component';
import { MyBookingsComponent } from './my-bookings/my-bookings.component';
import { ProfileComponent } from './profile/profile.component';
import { SupportComponent } from './support/support.component';
import { HomeComponent } from './home/home.component';
import { TractorsComponent } from './tractors/tractors.component';
import { ContactComponent } from './contact/contact.component';
import { TractorRegisterComponent } from './tractor-register/tractor-register.component';

export const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent },
  { path: 'manage-tractors', component: ManageTractorsComponent },
  { path: 'bookings', component: BookingsComponent },
  { path: 'customers', component: CustomersComponent },
  { path: 'payments', component: PaymentsComponent },
  { path: 'reports', component: ReportsComponent },
  { path: 'settings', component: SettingsComponent },
  { path: 'search', component: SearchComponent },
  { path: 'my-bookings', component: MyBookingsComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'support', component: SupportComponent },
  { path: 'home', component: HomeComponent },
  { path: 'tractors', component: TractorsComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'tractor-register', component: TractorRegisterComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' }, // Default route
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
