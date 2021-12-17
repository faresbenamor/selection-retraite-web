import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Residence} from "../_models/residence.model";
import {ResidenceService} from "../_services/residence.service";
import {environment} from "../../../environments/environment";

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
  serverUrl = environment.url;
  fileU?: File;
  filename =  '/assets/GSBackground.jpeg';
  constructor(@Inject(MAT_DIALOG_DATA) private data: Residence, private residenceService: ResidenceService, private ref: MatDialogRef<EditResidenceComponent>) { }

  ngOnInit(): void {
    this.residence = this.data;
  }

  onFileChange(files: any) {
    this.fileU = files.files.item(0);
    let   reader = new FileReader();
    reader.onload = (event: any) => this.residence.logo = event.target.result;

    if(this.fileU)
      reader.readAsDataURL(this.fileU);
  }

  add() {
    // @ts-ignore
    this.residenceService.save(this.residence, this.fileU).subscribe(this.ref.close());
  }

  editResidence() {
    // @ts-ignore
    this.residenceService.save(this.residence, this.fileU).subscribe(this.ref.close());
  }
}
