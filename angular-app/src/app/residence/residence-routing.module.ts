import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidenceComponent } from './residence.component';
import {DetailResidenceComponent} from "./detail-residence/detail-residence.component";

const routes: Routes = [{ path: '', component: ResidenceComponent }, {path: ':id', component: DetailResidenceComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ResidenceRoutingModule { }
