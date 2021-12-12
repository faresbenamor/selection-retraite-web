import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainLayoutRoutingModule} from './main-layout/main-layout-routing.module';
import {
  NbAuthComponent

} from '@nebular/auth';
import {LoginComponent} from "./login/login.component";
import {AdminModulesComponent} from "./admin-modules/admin-modules.component";
import {UsersComponent} from "./users/users.component";
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
},
  {
    path: 'main', component: MainLayoutComponent,
    children: MainLayoutRoutingModule.routes
  },
  {
    path: 'home',
    component: AdminModulesComponent
  },
  {
    path: 'users',
    component: UsersComponent
  }

  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
