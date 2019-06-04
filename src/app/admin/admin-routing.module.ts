import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AdminProfileComponent } from './admin-profile/admin-profile.component';
import { CreateAdminComponent } from './create-admin/create-admin.component';
import { RemoveAdminComponent } from './remove-admin/remove-admin.component';
import { ChangeAdminComponent } from './change-admin/change-admin.component';
import { AdminCustomersComponent } from './admin-customers/admin-customers.component';
import { AdminGuard } from './admin.guard';

const routes: Routes = [
  {
    path: 'admin', component: AdminComponent,
    canActivate:[AdminGuard],
    children: [
      {
        path: 'profile',
        component: AdminProfileComponent

      },
      {
        path: 'create',
        component: CreateAdminComponent
      },
      {
        path: 'change/:id',
        component: ChangeAdminComponent
      },
      {
        path: 'remove',
        component: RemoveAdminComponent
      },
      {path:'customers/view',component:AdminCustomersComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
