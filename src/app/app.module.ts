import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { material } from './material/material.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AdminRoomComponent } from './pages/admin/admin-room/admin-room.component';
import { AdminTransactionComponent } from './pages/admin/admin-transaction/admin-transaction.component';
import { StaffCustomerComponent } from './pages/staff/staff-customer/staff-customer.component';
import { StaffTransactionComponent } from './pages/staff/staff-transaction/staff-transaction.component';
import { StaffRoomComponent } from './pages/staff/staff-room/staff-room.component';
import { LoginComponent } from './component/auth/login/login.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LoadingComponent } from './component/loading/loading.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { LogoutComponent } from './component/logout/logout.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { AdminUserComponent } from './pages/admin/admin-user/admin-user.component';
import {FormsModule} from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    AdminRoomComponent,
    AdminTransactionComponent,
    StaffCustomerComponent,
    StaffTransactionComponent,
    StaffRoomComponent,
    LoginComponent,
    NotFoundComponent,
    LoadingComponent,
    AdminDashboardComponent,
    StaffDashboardComponent,
    LogoutComponent,
    SidebarComponent,
    SingleLayoutComponent,
    AdminUserComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
