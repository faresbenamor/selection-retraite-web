import {Component, OnInit} from '@angular/core';
import {CreateResidenceComponent} from "./create-residence/create-residence.component";
import {MatDialog} from "@angular/material/dialog";
import {ResidenceService} from "./_services/residence.service";
import {Residence} from "./_models/residence.model";
import {EditResidenceComponent} from "./edit-residence/edit-residence.component";

@Component({
  selector: 'app-residence',
  templateUrl: './residence.component.html',
  styleUrls: ['./residence.component.css']
})

export class ResidenceComponent implements OnInit {

  residences: Residence[] = [];
  searchValue = '';
  residencesAll: Residence[]= [];

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
      this.residences = data;
      this.residencesAll = data;
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

    });
  }


  filter() {
    // @ts-ignore
    this.residences = this.residencesAll.filter(r => r.nom?.toLowerCase().indexOf(this.searchValue.toLowerCase()) > -1)
  }
}

