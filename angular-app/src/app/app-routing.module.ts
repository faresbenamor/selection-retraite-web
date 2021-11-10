import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainLayoutRoutingModule} from './main-layout/main-layout-routing.module';
import {
  NbAuthComponent,
  NbLoginComponent,
  NbRegisterComponent,
  NbLogoutComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent, NbAuthBlockComponent,
} from '@nebular/auth';
import {LoginComponent} from "./login/login.component";
const routes: Routes = [

  {
  path: '',
  component: NbAuthComponent,
  children: [
    {
      path: '',
      component: LoginComponent
    }
  ]
},{ path: 'main', component: MainLayoutComponent, children: MainLayoutRoutingModule.routes },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
