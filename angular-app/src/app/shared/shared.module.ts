import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  NbAccordionModule,
  NbCardModule,
  NbIconModule,
  NbLayoutModule,
  NbMenuModule,
  NbSidebarModule,
  NbThemeModule,
  NbWindowModule
} from '@nebular/theme';
import {NbEvaIconsModule} from '@nebular/eva-icons';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {MatInputModule} from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort';
import {MatIconModule} from '@angular/material/icon';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatMenuModule} from '@angular/material/menu';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatOptionModule} from '@angular/material/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatSelectModule} from '@angular/material/select';
import {SweetAlert2Module} from "@sweetalert2/ngx-sweetalert2";



@NgModule({
  declarations: [],
    imports: [
      MatInputModule,
      NbCardModule,
      NbAccordionModule,
      NbWindowModule.forChild(),
      CommonModule,
      NbLayoutModule,
      NbSidebarModule.forRoot(),
      NbThemeModule.forRoot(),
      NbMenuModule.forRoot(),
      NbThemeModule.forRoot({name: 'corporate'}),
      NbEvaIconsModule,
      NbIconModule,
      NgbModule,
      MatIconModule,
      MatTooltipModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatMenuModule,
      MatToolbarModule,
      MatTabsModule,
      MatOptionModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatDialogModule,
      MatInputModule,
      MatTableModule,
      MatProgressBarModule,
      MatSortModule,
      ReactiveFormsModule,
      SweetAlert2Module

    ],
    exports: [
      NbLayoutModule,
      NbSidebarModule,
      NbThemeModule,
      NbMenuModule,
      NbThemeModule,
      NbAccordionModule,
      NbEvaIconsModule,
      NbIconModule,
      NbThemeModule,
      NbThemeModule,
      NgbModule,
      NbCardModule,
      NbWindowModule,
      MatIconModule,
      MatTooltipModule,
      MatCardModule,
      MatButtonModule,
      MatDividerModule,
      MatMenuModule,
      MatToolbarModule,
      MatTabsModule,
      MatOptionModule,
      FormsModule,
      MatFormFieldModule,
      MatSelectModule,
      MatDialogModule,
      MatInputModule,
      MatTableModule,
      MatProgressBarModule,
      MatSortModule,
      ReactiveFormsModule,
      SweetAlert2Module
    ]

})
export class SharedModule {
}
