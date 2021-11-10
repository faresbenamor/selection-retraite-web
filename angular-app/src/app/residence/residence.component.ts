import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})
export class ResidenceComponent implements OnInit {
  stocks= ['test','test','test','test','test','test','test','test','test','test','test','test','test','test','test','test',] ;

  constructor() { }

  ngOnInit(): void {
  }

}
