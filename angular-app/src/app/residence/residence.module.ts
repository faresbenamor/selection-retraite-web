import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidenceRoutingModule } from './residence-routing.module';
import { ResidenceComponent } from './residence.component';
import { CreateResidenceComponent } from './create-residence/create-residence.component';
import { EditResidenceComponent } from './edit-residence/edit-residence.component';
import { DeleteResidenceComponent } from './delete-residence/delete-residence.component';
import {SharedModule} from "../shared/shared.module";
import { DetailResidenceComponent } from './detail-residence/detail-residence.component';


@NgModule({
  declarations: [
    ResidenceComponent,
    CreateResidenceComponent,
    EditResidenceComponent,
    DeleteResidenceComponent,
    DetailResidenceComponent
  ],
  imports: [
    CommonModule,
    ResidenceRoutingModule,
    SharedModule,
  ]
})
export class ResidenceModule { }
