import {Component, Inject, OnInit} from '@angular/core';
// @ts-ignore
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {News} from '../_models/news.model';
import {NewsService} from '../_services/news.service';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-create-news',
  templateUrl: './create-news.component.html',
  styleUrls: ['./create-news.component.css']
})
export class CreateNewsComponent implements OnInit {
  Editor = ClassicEditor;
  test = '';
  news = new News();
  fileU?: File;
  filename =  '/assets/GSBackground.jpeg';
  constructor(private service: NewsService,
              private dialogRef: MatDialogRef<CreateNewsComponent>,
              private activatedRoute: ActivatedRoute,
              @Inject(MAT_DIALOG_DATA) private data: any) { }

  ngOnInit(): void {

  }
  onFileChange(files: any): void {
    this.fileU = files.files.item(0);
    let   reader = new FileReader();
    reader.onload = (event: any) => this.filename = event.target.result;
    if (this.fileU)
      reader.readAsDataURL(this.fileU);
  }

  add(): void{
    // console.log( this.activatedRoute.parent?.parent?.snapshot.params.id);
    // @ts-ignore
    this.service.save(this.news, this.fileU, this.data.rid).subscribe(this.dialogRef.close);
  }



}
