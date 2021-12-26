import { Component, OnInit } from '@angular/core';
import {INews} from "./_models/news.model";

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

  constructor() { }

  ngOnInit(): void {
  }

  openAddDialog() {

  }
}
