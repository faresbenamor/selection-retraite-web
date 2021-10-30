import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlertesRoutingModule } from './alertes-routing.module';
import { AlertesComponent } from './alertes.component';
import { CreateAlertesComponent } from './create-alertes/create-alertes.component';
import { EditAlertesComponent } from './edit-alertes/edit-alertes.component';
import { DeleteAlertesComponent } from './delete-alertes/delete-alertes.component';


@NgModule({
  declarations: [
    AlertesComponent,
    CreateAlertesComponent,
    EditAlertesComponent,
    DeleteAlertesComponent
  ],
  imports: [
    CommonModule,
    AlertesRoutingModule
  ]
})
export class AlertesModule { }
