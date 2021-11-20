import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA} from "@angular/material/dialog";
import {Residence} from "../_models/residence.model";

@Component({
  selector: 'app-edit-residence',
  templateUrl: './edit-residence.component.html',
  styleUrls: ['./edit-residence.component.css']
})
export class EditResidenceComponent implements OnInit {

  regions = ["Abitibi-Temiscamingue","Bas-Saint-Laurent","Capitale-Nationale","Quebec","Chaudiere-Appalaches",
    "Estrie","Gaspe","Lanaudiere","Laurentides","Laval","Mauricie","Monteregie","Montreal",
    "Outaouais","Saguenay"];

  residence: Residence = new Residence();

  constructor(@Inject(MAT_DIALOG_DATA) private data: Residence) { }

  ngOnInit(): void {
    this.residence = this.data;
  }

}
