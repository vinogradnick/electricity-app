import {NgModule} from '@angular/core';
import {Routes, RouterModule, PreloadAllModules} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {WorkerGuard} from './worker/worker.guard';
import {WorkerComponent} from './worker/worker.component';
import {ElectricityCenterGuard} from './electricity-center/electricity-center.guard';
import {ElectricityCenterComponent} from './electricity-center/electricity-center.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';

const routes: Routes = [

  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'admin/center',
    redirectTo: 'admin',
  }
  ,
  {
    path: 'worker',
    canActivate: [WorkerGuard],
    component: WorkerComponent
  },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
