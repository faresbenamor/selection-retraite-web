import { Component, OnInit } from '@angular/core';
import {IRole, IUser, Role, User} from "../../user/_models/user.model";
import {Residence} from "../../residence/_models/residence.model";
import {ResidenceService} from "../../residence/_services/residence.service";
import {UserService} from "../../user/_services/user.service";
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: IUser = new User();
  roles: Role[] = [];
  residences: Residence[] = [];
  role: IRole = new Role();

  constructor(private residenceService: ResidenceService, private userService: UserService, private ref: MatDialogRef<CreateUserComponent>) { }

  ngOnInit(): void {
    this.getAllResidences()
    this.getAllRoles();
  }

  getAllResidences() {
    this.residenceService.findAll().subscribe(data => {
      this.residences = data.filter(r => r.user == null);
    }, error => {
      alert("nooo");
    })
  }

  getAllRoles() {
    this.userService.getRoles().subscribe(data => {
      this.roles = data;
    })
  }

  add() {
    this.user.roles = [];
    this.user.roles.push(this.role);

    // @ts-ignore
    this.userService.create(this.user).subscribe(this.ref.close());
  }

}
