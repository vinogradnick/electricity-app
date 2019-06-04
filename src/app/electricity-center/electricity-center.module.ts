import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { FiderCreateComponent } from './fider/fider-create/fider-create.component';
import { FiderChangeComponent } from './fider/fider-change/fider-change.component';
import { FiderRemoveComponent } from './fider/fider-remove/fider-remove.component';
import { TpCreateComponent } from './tp/tp-create/tp-create.component';
import { TpChangeComponent } from './tp/tp-change/tp-change.component';
import { TpRemoveComponent } from './tp/tp-remove/tp-remove.component';
import { SectionCreateComponent } from './section/section-create/section-create.component';
import { SectionChangeComponent } from './section/section-change/section-change.component';
import { SectionRemoveComponent } from './section/section-remove/section-remove.component';
import { LineChangeComponent } from './line/line-change/line-change.component';
import { LineRemoveComponent } from './line/line-remove/line-remove.component';
import { LineCreateComponent } from './line/line-create/line-create.component';
import { CustomerCreateComponent } from './customer/customer-create/customer-create.component';
import { CustomerChangeComponent } from './customer/customer-change/customer-change.component';
import { CustomerRemoveComponent } from './customer/customer-remove/customer-remove.component';
import { ElectricityCenterGuard } from './electricity-center.guard';
import { JwtHelperService, JwtModule } from '@auth0/angular-jwt';
import { ElectricityReviewComponent } from './electricity-review/electricity-review.component';
import { ElectricityCenterRoutingModule } from './electricity-center-routing.module';
import { CustomerComponent } from './customer/customer.component';
import {MatRadioModule} from '@angular/material/radio';

import {
  MatAutocompleteModule,
  MatBadgeModule,
  MatBottomSheetModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatDividerModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatStepperModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatTreeModule,
  
} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomerDetailComponent } from './customer/customer-detail/customer-detail.component';
import { WorkloadComponent } from './workload/workload.component';
import { RequestConstructorComponent } from './request-constructor/request-constructor.component';
import { LoadComponent } from './workload/load/load.component';
import { DispatcherProfileComponent } from './dispatcher-profile/dispatcher-profile.component';
import { OrdersComponent } from './orders/orders.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';
import { ChangeOrderComponent } from './orders/change-order/change-order.component';
import { LineViewComponent } from './line/line-view/line-view.component';
import { FiderViewComponent } from './fider/fider-view/fider-view.component';
import { TpViewComponent } from './tp/tp-view/tp-view.component';
import { SectionViewComponent } from './section/section-view/section-view.component';
import { WorkloadViewComponent } from './workload/workload-view/workload-view.component';
import { CreateWorkloadComponent } from './workload/create-workload/create-workload.component';
@NgModule({
  declarations: [
    FiderViewComponent,
    FiderCreateComponent,
    FiderChangeComponent,
    FiderRemoveComponent,
    TpViewComponent,
    TpCreateComponent,
    TpChangeComponent,
    TpRemoveComponent,
    SectionViewComponent,
    SectionCreateComponent,
    SectionChangeComponent,
    SectionRemoveComponent,
    LineViewComponent,
    LineCreateComponent,
    LineChangeComponent,
    LineRemoveComponent,
    CustomerComponent,
    CustomerCreateComponent,
    CustomerChangeComponent,
    CustomerRemoveComponent,
    ElectricityReviewComponent,
    CustomerDetailComponent,
    WorkloadComponent,
    RequestConstructorComponent,
    LoadComponent,
    DispatcherProfileComponent,
    OrdersComponent,
    CreateOrderComponent,
    ChangeOrderComponent,
    LineViewComponent,
    FiderViewComponent,
    TpViewComponent,
    SectionViewComponent,
    WorkloadViewComponent,
    CreateWorkloadComponent,
  ],
  imports: [
    CommonModule,
    ElectricityCenterRoutingModule,
    MatAutocompleteModule,
    MatBadgeModule,
    MatBottomSheetModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatDatepickerModule,
    MatDialogModule,
    MatDividerModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatStepperModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    MatTreeModule,
    FormsModule,
    ReactiveFormsModule,
    MatRadioModule

  ],
  providers:[
    ElectricityCenterGuard,
    

  ],
  exports:[
    FormsModule
  ]
})
export class ElectricityCenterModule { }
