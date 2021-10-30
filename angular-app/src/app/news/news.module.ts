import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsRoutingModule } from './news-routing.module';
import { NewsComponent } from './news.component';
import { CreateNewsComponent } from './create-news/create-news.component';
import { EditNewsComponent } from './edit-news/edit-news.component';
import { DeleteNewsComponent } from './delete-news/delete-news.component';


@NgModule({
  declarations: [
    NewsComponent,
    CreateNewsComponent,
    EditNewsComponent,
    DeleteNewsComponent
  ],
  imports: [
    CommonModule,
    NewsRoutingModule
  ]
})
export class NewsModule { }
