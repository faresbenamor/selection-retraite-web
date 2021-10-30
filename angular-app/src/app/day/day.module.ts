import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DayRoutingModule } from './day-routing.module';
import { DayComponent } from './day.component';
import { CreateDayComponent } from './create-day/create-day.component';
import { EditDayComponent } from './edit-day/edit-day.component';
import { DeleteDayComponent } from './delete-day/delete-day.component';


@NgModule({
  declarations: [
    DayComponent,
    CreateDayComponent,
    EditDayComponent,
    DeleteDayComponent
  ],
  imports: [
    CommonModule,
    DayRoutingModule
  ]
})
export class DayModule { }
