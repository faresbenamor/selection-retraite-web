import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence.component';

const routes: Routes = [{ path: '', component: ResidenceComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenceRoutingModule { }
