import { TokenService } from './service/token.service';
import { AuthguardService } from './service/authguard.service';
import { ApiService } from './service/api.service';
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
import {FormsModule} from '@angular/forms';
import { CreateRoomComponent } from './models/create-room/create-room.component';
import { FilterRoomComponent } from './models/filter-room/filter-room.component';
import { FilterUserComponent } from './models/filter-user/filter-user.component';
import { FilterTransactionComponent } from './models/filter-transaction/filter-transaction.component';
import { EditRoomComponent } from './models/edit-room/edit-room.component';
import { DeleteAdminRoomComponent } from './models/delete-admin-room/delete-admin-room.component';
import { ViewUserComponent } from './models/view-user/view-user.component';
import { ViewTransactionComponent } from './models/view-transaction/view-transaction.component';
import { StaffOrderComponent } from './pages/staff/staff-order/staff-order.component';
import { FilterOrderComponent } from './models/filter-order/filter-order.component';
import { CreateTransactionComponent } from './models/create-transaction/create-transaction.component';
import { AdminOrderlistingComponent } from './pages/admin/admin-orderlisting/admin-orderlisting.component';
import { HTTP_INTERCEPTORS , HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { BsDatepickerModule, BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { CustomerHomeComponent } from './pages/customer/customer-home/customer-home.component';
import { CustomerOrderComponent } from './pages/customer/customer-order/customer-order.component';
import { CustomerTransactionComponent } from './pages/customer/customer-transaction/customer-transaction.component';
import { CustomerProfileComponent } from './pages/customer/customer-profile/customer-profile.component';
import { CustomerSearchComponent } from './pages/customer/customer-search/customer-search.component';
import { CustomerNavbarComponent } from './layout/customer-navbar/customer-navbar.component';
import { CustomerFooterbarComponent } from './layout/customer-footerbar/customer-footerbar.component';
import { CardComponent } from './component/card/card.component';
import { RecommendedComponent } from './component/recommended/recommended.component';
import { PopularComponent } from './component/popular/popular.component';
import { BudgetComponent } from './component/budget/budget.component';
import { SignupComponent } from './component/signup/signup.component';
import { ChangePasswordComponent } from './component/change-password/change-password.component';
import { DetailsComponent } from './component/details/details.component';
import { OrderPageComponent } from './component/order-page/order-page.component'

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
    CreateRoomComponent,
    FilterRoomComponent,
    FilterUserComponent,
    FilterTransactionComponent,
    EditRoomComponent,
    DeleteAdminRoomComponent,
    ViewUserComponent,
    ViewTransactionComponent,
    StaffOrderComponent,
    FilterOrderComponent,
    CreateTransactionComponent,
    AdminOrderlistingComponent,
    CustomerHomeComponent,
    CustomerOrderComponent,
    CustomerTransactionComponent,
    CustomerProfileComponent,
    CustomerSearchComponent,
    CustomerNavbarComponent,
    CustomerFooterbarComponent,
    CardComponent,
    RecommendedComponent,
    PopularComponent,
    BudgetComponent,
    SignupComponent,
    ChangePasswordComponent,
    DetailsComponent,
    OrderPageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    material,
    FormsModule,
    HttpClientModule,
    BsDatepickerModule.forRoot()
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: TokenService, multi: true
  },ApiService,AuthguardService,DatePipe,BsDatepickerConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
