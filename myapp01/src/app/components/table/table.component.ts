import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import UserDetails from './data';
import User from './model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns = ['email', 'created', 'roles'];
  dataSource: MatTableDataSource<User>;
  users = UserDetails;

  constructor() { 
    this.dataSource = new MatTableDataSource<User>(this.users);
  }


}
