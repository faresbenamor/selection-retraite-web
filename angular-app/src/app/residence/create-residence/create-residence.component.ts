import { Component, OnInit } from '@angular/core';
import {IResidence, Residence} from "../_models/residence.model";
import {ResidenceService} from "../_services/residence.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-residence',
  templateUrl: './create-residence.component.html',
  styleUrls: ['./create-residence.component.css']
})
export class CreateResidenceComponent implements OnInit {

  residence: IResidence = new Residence();
  fileU?: File;
  filename =  '/assets/GSBackground.jpeg';


  regions = ["Abitibi-Temiscamingue","Bas-Saint-Laurent","Capitale-Nationale","Quebec","Chaudiere-Appalaches",
  "Estrie","Gaspe","Lanaudiere","Laurentides","Laval","Mauricie","Monteregie","Montreal",
  "Outaouais","Saguenay"];

  constructor(private residenceService: ResidenceService, private ref: MatDialogRef<CreateResidenceComponent>) { }

  ngOnInit(): void {
  }

  onFileChange(files: any) {
    this.fileU = files.files.item(0);
    let   reader = new FileReader();
    reader.onload = (event: any) => this.filename = event.target.result;
    if(this.fileU)
    reader.readAsDataURL(this.fileU);
  }

  add() {
    // @ts-ignore
    this.residenceService.save(this.residence, this.fileU).subscribe(this.ref.close());
  }

  showAlert() {
    alert('Vérifiez les champs !');
  }
}
