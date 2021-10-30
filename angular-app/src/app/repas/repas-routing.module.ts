import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RepasComponent } from './repas.component';

const routes: Routes = [{ path: '', component: RepasComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepasRoutingModule { }
