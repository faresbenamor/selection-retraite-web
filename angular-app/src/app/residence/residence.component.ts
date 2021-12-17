import {Component, OnInit} from '@angular/core';
import {CreateResidenceComponent} from "./create-residence/create-residence.component";
import {MatDialog} from "@angular/material/dialog";
import {ResidenceService} from "./_services/residence.service";
import {IResidence, Residence} from "./_models/residence.model";
import {EditResidenceComponent} from "./edit-residence/edit-residence.component";
import {environment} from "../../environments/environment";
import {valueReferenceToExpression} from "@angular/compiler-cli/src/ngtsc/annotations/src/util";

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})

export class ResidenceComponent implements OnInit {

  regions = ["Toutes les régions","Abitibi-Temiscamingue","Bas-Saint-Laurent","Capitale-Nationale","Quebec","Chaudiere-Appalaches",
    "Estrie","Gaspe","Lanaudiere","Laurentides","Laval","Mauricie","Monteregie","Montreal",
    "Outaouais","Saguenay"];

  serverUrl = environment.url;

  residences: Residence[] = [];
  residencesAll: Residence[]= [];
  searchValue = '';
  residence: IResidence= new Residence();
  loaded = false;



  constructor(private dialog: MatDialog, private residenceService: ResidenceService) { }

  ngOnInit(): void {
    this.getAllResidences();
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CreateResidenceComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {
     this.getAllResidences()
    });
  }

  getAllResidences() {
    this.residenceService.findAll().subscribe(data => {
      this.loaded = true;
      this.residences = data.map(value => {
        value.logo = this.serverUrl + value.logo;
        return value;
      });
      this.residencesAll = this.residences;
    })
  }

  deleteResidence(id: any) {
    this.residenceService.delete(id).subscribe(data => {
      this.getAllResidences();
    })
  }

  openEditDialog(residence : Residence) {
    const dialogRef = this.dialog.open(EditResidenceComponent, {
      width: '600px',
      data: residence
    });
    dialogRef.afterClosed().subscribe(data => {
      this.getAllResidences();
    });
  }


  filter() {
    // @ts-ignore
    this.residences = this.residencesAll.filter(r => r.nom?.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)
  }

  filterByRegion() {
    if (this.residence.region == 'Toutes les régions') {
      this.residences = this.residencesAll;
    }
    else {
      // @ts-ignore
      this.residences = this.residencesAll.filter(r => r.region?.indexOf(this.residence.region) > -1)
    }
  }
}

