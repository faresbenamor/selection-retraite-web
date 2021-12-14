import { Component, OnInit } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {MatTableDataSource} from "@angular/material/table";
import {CreateUserComponent} from "./create-user/create-user.component";
import {UserService} from "../user/_services/user.service";
import {User} from "../user/_models/user.model";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = []
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol', 'action'];
  dataSource : MatTableDataSource<User> = new MatTableDataSource<User>();

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
      this.dataSource = new MatTableDataSource(this.users);
    })
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  deleteUser(id : any) {
    this.userService.delete(id).subscribe(data => {
      this.getAllUser();
    })
  }
}
