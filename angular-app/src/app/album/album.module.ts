import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AlbumRoutingModule } from './album-routing.module';
import { AlbumComponent } from './album.component';
import { CreateAlbumComponent } from './create-album/create-album.component';
import { EditAlbumComponent } from './edit-album/edit-album.component';
import { DeleteAlbumComponent } from './delete-album/delete-album.component';


@NgModule({
  declarations: [
    AlbumComponent,
    CreateAlbumComponent,
    EditAlbumComponent,
    DeleteAlbumComponent
  ],
  imports: [
    CommonModule,
    AlbumRoutingModule
  ]
})
export class AlbumModule { }
