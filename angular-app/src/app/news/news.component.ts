import { Component, OnInit } from '@angular/core';
import {INews} from "./_models/news.model";
import {EditResidenceComponent} from "../residence/edit-residence/edit-residence.component";
import {MatDialog} from "@angular/material/dialog";
import {CreateNewsComponent} from "./create-news/create-news.component";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  loaded: boolean = false;
  news: INews[] = [{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/Beloeil@2x.png"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },{
    titre: "heyla",
    sousTitre: "yababa heyla",
    image: "http://localhost:8083/downloadFile/billard@2x.jpeg"
  },];

  constructor(private dialog: MatDialog, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    console.log( this.activatedRoute.snapshot.paramMap)

    // console.log( this.activatedRoute.snapshot.paramMap.id)
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CreateNewsComponent, {
      width: '600px',
      data:{
        rid:  this.activatedRoute.snapshot.params.id,
      }
    });
    dialogRef.afterClosed().subscribe(data => {
    });
  }
}
