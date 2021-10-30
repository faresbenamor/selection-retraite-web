import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepasRoutingModule } from './repas-routing.module';
import { RepasComponent } from './repas.component';
import { CreateRepasComponent } from './create-repas/create-repas.component';
import { EditRepasComponent } from './edit-repas/edit-repas.component';
import { DeleteRepasComponent } from './delete-repas/delete-repas.component';


@NgModule({
  declarations: [
    RepasComponent,
    CreateRepasComponent,
    EditRepasComponent,
    DeleteRepasComponent
  ],
  imports: [
    CommonModule,
    RepasRoutingModule
  ]
})
export class RepasModule { }
