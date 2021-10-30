import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActivityRoutingModule } from './activity-routing.module';
import { ActivityComponent } from './activity.component';
import { CreateActivityComponent } from './create-activity/create-activity.component';
import { EditActivityComponent } from './edit-activity/edit-activity.component';
import { DeleteActivityComponent } from './delete-activity/delete-activity.component';


@NgModule({
  declarations: [
    ActivityComponent,
    CreateActivityComponent,
    EditActivityComponent,
    DeleteActivityComponent
  ],
  imports: [
    CommonModule,
    ActivityRoutingModule
  ]
})
export class ActivityModule { }
