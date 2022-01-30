import {Component, Inject, OnInit} from '@angular/core';
import {IRole, Role, User} from "../../user/_models/user.model";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ResidenceService} from "../../residence/_services/residence.service";
import {UserService} from "../../user/_services/user.service";
import {IResidence, Residence} from "../../residence/_models/residence.model";

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user: User = new User();
  roles: IRole[] | undefined = [];
  residences: Residence[] = [];
  rolee: IRole = new Role();
  residencee= new Residence();

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private residenceService: ResidenceService, private userService: UserService, private ref: MatDialogRef<EditUserComponent>) { }

  ngOnInit(): void {
    this.user = this.data;
    this.user.password = '';
    this.rolee = this.data.roles[0];
    if(!!this.data.residence)
    this.residencee = this.data.residence;
    this.getAllRoles();
    this.getAllResidences();
  }

  getAllResidences() {
    this.residenceService.findAll().subscribe(data => {
      this.residences = data;
    })
  }

  getAllRoles() {
    this.userService.getRoles().subscribe(data => {
      this.roles = data;
    })
  }

  editUser() {
    this.userService.update(this.user).subscribe(data => {
      this.ref.close();
    })
  }
}
