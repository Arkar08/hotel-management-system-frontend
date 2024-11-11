import { authGuard } from './component/auth/auth.guard';
import { AuthguardService } from './service/authguard.service';
import { AdminOrderlistingComponent } from './pages/admin/admin-orderlisting/admin-orderlisting.component';
import { StaffOrderComponent } from './pages/staff/staff-order/staff-order.component';
import { AdminUserComponent } from './pages/admin/admin-user/admin-user.component';
import { SingleLayoutComponent } from './layout/single-layout/single-layout.component';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { LogoutComponent } from './component/logout/logout.component';
import { StaffTransactionComponent } from './pages/staff/staff-transaction/staff-transaction.component';
import { StaffRoomComponent } from './pages/staff/staff-room/staff-room.component';
import { StaffCustomerComponent } from './pages/staff/staff-customer/staff-customer.component';
import { StaffDashboardComponent } from './pages/staff/staff-dashboard/staff-dashboard.component';
import { AdminTransactionComponent } from './pages/admin/admin-transaction/admin-transaction.component';
import { AdminRoomComponent } from './pages/admin/admin-room/admin-room.component';
import { AdminDashboardComponent } from './pages/admin/admin-dashboard/admin-dashboard.component';
import { LoginComponent } from './component/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:'',
    redirectTo:'auth/login',
    pathMatch:'full'
  },
  {
    path:'auth/login',
    component:LoginComponent
  },
  {
    path:'',
    component:SingleLayoutComponent,
    children:[
      {
        path:'admin/dashboard',
        component:AdminDashboardComponent,
        canActivate:[authGuard]
      },
      {
        path:'admin/room',
        component:AdminRoomComponent,
        canActivate:[authGuard]
      },
      {
        path:'admin/customer',
        component:AdminUserComponent,
        canActivate:[authGuard]
      },
      {
        path:'admin/orderlistings',
        component:AdminOrderlistingComponent,
        canActivate:[authGuard]
      },
      {
        path:'admin/transaction',
        component:AdminTransactionComponent,
        canActivate:[authGuard]
      },
      {
        path:'receptionist/dashboard',
        component:StaffDashboardComponent,
        canActivate:[authGuard]
      },
      {
        path:'receptionist/customer',
        component:StaffCustomerComponent,
        canActivate:[authGuard]
      },
      {
        path:'receptionist/room',
        component:StaffRoomComponent,
        canActivate:[authGuard]
      },
      {
        path:'receptionist/transaction',
        component:StaffTransactionComponent,
        canActivate:[authGuard]
      },
      {
        path:'receptionist/orderList',
        component:StaffOrderComponent,
        canActivate:[authGuard]
      },
      {
        path:'logout',
        component:LogoutComponent,
        canActivate:[authGuard]
      }
    ]
  },
  {
    path:'**',
    component:NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
