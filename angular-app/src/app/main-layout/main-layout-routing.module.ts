import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsModule) },
  { path: 'day', loadChildren: () => import('../day/day.module').then(m => m.DayModule) },
  { path: 'alertes', loadChildren: () => import('../alertes/alertes.module').then(m => m.AlertesModule) },
  { path: 'activity', loadChildren: () => import('../activity/activity.module').then(m => m.ActivityModule) },
  { path: 'residence', loadChildren: () => import('../residence/residence.module').then(m => m.ResidenceModule) },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainLayoutRoutingModule {
  public static routes = routes;
}
