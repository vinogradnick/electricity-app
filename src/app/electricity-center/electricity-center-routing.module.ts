import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ElectricityCenterComponent } from './electricity-center.component';
import { FiderCreateComponent } from './fider/fider-create/fider-create.component';
import { FiderChangeComponent } from './fider/fider-change/fider-change.component';
import { FiderRemoveComponent } from './fider/fider-remove/fider-remove.component';
import { TpCreateComponent } from './tp/tp-create/tp-create.component';
import { TpChangeComponent } from './tp/tp-change/tp-change.component';
import { TpRemoveComponent } from './tp/tp-remove/tp-remove.component';
import { SectionCreateComponent } from './section/section-create/section-create.component';
import { SectionChangeComponent } from './section/section-change/section-change.component';
import { SectionRemoveComponent } from './section/section-remove/section-remove.component';
import { LineCreateComponent } from './line/line-create/line-create.component';
import { LineChangeComponent } from './line/line-change/line-change.component';
import { LineRemoveComponent } from './line/line-remove/line-remove.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerChangeComponent } from './customer/customer-change/customer-change.component';
import { CustomerRemoveComponent } from './customer/customer-remove/customer-remove.component';
import { CustomerComponent } from './customer/customer.component';
import { ElectricityCenterGuard } from './electricity-center.guard';
import { ElectricityReviewComponent } from './electricity-review/electricity-review.component';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WorkloadComponent } from './workload/workload.component';
import { LoadComponent } from './workload/load/load.component';
import { RequestConstructorComponent } from './request-constructor/request-constructor.component';
import { DispatcherProfileComponent } from './dispatcher-profile/dispatcher-profile.component';
import { LineViewComponent } from './line/line-view/line-view.component';
import { SectionViewComponent } from './section/section-view/section-view.component';
import { TpViewComponent } from './tp/tp-view/tp-view.component';
import { FiderViewComponent } from './fider/fider-view/fider-view.component';
import { WorkloadViewComponent } from './workload/workload-view/workload-view.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { ChangeOrderComponent } from './orders/change-order/change-order.component';
import { CreateWorkloadComponent } from './workload/create-workload/create-workload.component';

const routes: Routes = [
  {
    path: 'electro',
    component: ElectricityCenterComponent,
    canActivate: [ElectricityCenterGuard],
    children: [
      {
        path: 'main',
        component: DispatcherProfileComponent
      },
      {
        path: 'view',
        component: ElectricityReviewComponent,
      },
      {
        path: 'fider',
        children: [
          { path: 'view/:id', component: FiderViewComponent },
          { path: 'create', component: FiderCreateComponent },
          { path: 'change/:id', component: FiderChangeComponent },
          { path: 'remove/:id', component: FiderRemoveComponent },

        ]
      },
      {
        path:'orders',
        children:[
          {path:'view/:id',component:OrdersComponent},
          { path: 'create', component: CreateOrderComponent },
          { path: 'change/:id', component: ChangeOrderComponent },
        ]
      },
      {
        path: 'tp',
        children: [
          { path: 'view/:id', component: TpViewComponent },
          { path: 'create', component: TpCreateComponent },
          { path: 'change/:id', component: TpChangeComponent },
          { path: 'remove/:id', component: TpRemoveComponent },

        ]
      },
      {
        path: 'section',
        children: [
          { path: 'view/:id', component: SectionViewComponent },
          { path: 'create', component: SectionCreateComponent },
          { path: 'change/:id', component: SectionChangeComponent },
          { path: 'remove/:id', component: SectionRemoveComponent },

        ]
      },
      {
        path: 'line',
        children: [
          { path: 'view/:id', component: LineViewComponent },
          { path: 'create', component: LineCreateComponent },
          { path: 'change/:id', component: LineChangeComponent },
          { path: 'remove/:id', component: LineRemoveComponent },

        ]
      },
      {
        path: 'customer',

        children: [
          { path: 'view', component: CustomerComponent },
          { path: 'create', component: CustomerCreateComponent },
          { path: 'change/:id', component: CustomerChangeComponent },
          { path: 'remove/:id', component: CustomerRemoveComponent },
          { path: 'detail/:id', component: CustomerDetailComponent }

        ]
      },
      {
        path: 'workload',

        children: [
          {
            path: 'load', component: LoadComponent
          },
          {
            path: 'create', component: CreateWorkloadComponent
          },
          
          { path: 'view', component: WorkloadComponent },
          { path: 'view/:id', component: WorkloadViewComponent }

        ]
      },
      {
        path: 'constructor',
        component: RequestConstructorComponent
      }
    ]
  },
  {
    path: '',
    redirectTo: 'view',
    pathMatch: 'full'
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ElectricityCenterRoutingModule { }
