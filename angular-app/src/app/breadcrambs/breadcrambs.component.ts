import {Component, Input, OnInit} from '@angular/core';
import {BreadcrumbItem} from "./breadcrumb-item.model";


export interface Info {
  title: string;
  body: string;
}

@Component({
  selector: 'app-breadcrambs',
  templateUrl: './breadcrambs.component.html',
  styleUrls: ['./breadcrambs.component.css']
})
export class BreadcrambsComponent implements OnInit {
  @Input()
  breadcrumbList: BreadcrumbItem[] | undefined;
  @Input()
  title: string | undefined;
  @Input()
  icon: string | undefined;
  @Input()
  infos: Info[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
