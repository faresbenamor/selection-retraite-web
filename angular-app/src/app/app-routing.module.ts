import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainLayoutComponent} from './main-layout/main-layout.component';
import {MainLayoutRoutingModule} from './main-layout/main-layout-routing.module';

const routes: Routes = [{ path: '', component: MainLayoutComponent, children: MainLayoutRoutingModule.routes }, { path: 'news', loadChildren: () => import('./news/news.module').then(m => m.NewsModule) }, { path: 'day', loadChildren: () => import('./day/day.module').then(m => m.DayModule) }, { path: 'alertes', loadChildren: () => import('./alertes/alertes.module').then(m => m.AlertesModule) }, { path: 'activity', loadChildren: () => import('./activity/activity.module').then(m => m.ActivityModule) }, { path: 'residence', loadChildren: () => import('./residence/residence.module').then(m => m.ResidenceModule) }, ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
