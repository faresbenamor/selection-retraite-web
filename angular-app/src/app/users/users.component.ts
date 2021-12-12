import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UserService} from "../user/_services/user.service";
import {User} from "../user/_models/user.model";

export interface PeriodicElement {
  name: string;
  position: number;
  weight: string;
  symbol: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Boreal@groupeselection.com', weight: "Admin", symbol: 'Boreal'},
  {position: 2, name: 'Beloeil@groupeselection.com', weight: "Admin", symbol: 'Beloeil'},
  {position: 3, name: 'BleuHorizon@groupeselection.com', weight: "Admin", symbol: 'BleuHorizon'},
  {position: 4, name: 'Cherbourg@groupeselection.com', weight: "Admin", symbol: 'Cherbourg'},
  {position: 5, name: 'Vaudreuil@groupeselection.com', weight: "Admin", symbol: 'Vaudreuil'},
  {position: 6, name: 'Laval@groupeselection.com', weight: "Admin", symbol: 'Laval'},
  {position: 7, name: 'Lévis@groupeselection.com', weight: "Admin", symbol: 'Lévis'},
  {position: 8, name: 'Marronniers@groupeselection.com', weight: "Admin", symbol: 'Marronniers'},
  {position: 9, name: 'WestIsland@groupeselection.com', weight: "Admin", symbol: 'WestIsland'},
  {position: 10, name: 'Vista@groupeselection.com', weight: "Admin", symbol: 'Vista'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataSource = new MatTableDataSource(ELEMENT_DATA);

  constructor(private dialog: MatDialog, private userService: UserService) { }

  ngOnInit(): void {
    this.getAllUser()
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(CreateUserComponent, {
      width: '600px',
    });
    dialogRef.afterClosed().subscribe(data => {

    });
  }

  getAllUser() {
    this.userService.getUsers().subscribe(data => {
      this.users = data
       console.log(this.users);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }
}
