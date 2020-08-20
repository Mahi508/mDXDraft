import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MaterialModule } from '../angular-material.module';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

export interface PeriodicElement {
  name: string;
  position: number;
  code: number;
  address: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'user', code: 79, address: 'null'},
  {position: 2, name: 'user', code: 26, address: 'null'},
  {position: 3, name: 'user', code: 641, address: 'null'},
  {position: 4, name: 'user', code: 9122, address: 'null'},
  {position: 5, name: 'user', code: 1011, address: 'null'},
  {position: 6, name: 'user', code: 107, address: 'null'},
  {position: 7, name: 'user', code: 67, address: 'null'},
];
let products = [
  {id: 1, name: 'Licensed Frozen Hat', description: 'Incidunt et magni', price: '170.00', quantity: 56840},
  {id: 2, name: 'Rustic Concrete Chicken', description: 'Sint libero mollitia', price: '302.00', quantity: 9358},
  {id: 3, name: 'Fantastic Metal Computer', description: 'In consequuntur cupiditat', price: '279.00', quantity: 90316},
  {id: 4, name: 'Refined Concrete Chair', description: 'Saepe nemo praesentium', price: '760.00', quantity: 5899}
];
@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent  {
  displayedColumns = ['id', 'name', 'progress', 'color'];
  dataSource: MatTableDataSource<UserData>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private  dialog:  MatDialog, private  router:  Router) {
    // Create 100 users
    const users: UserData[] = [];
    for (let i = 1; i <= 100; i++) { users.push(createNewUser(i)); }

    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource(users);
  }

  /**
   * Set the paginator and sort after the view init since this component will
   * be able to query its view for the initialized paginator and sort.
   */
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
}

/** Builds and returns a new User. */
function createNewUser(id: number): UserData {
  const name =
      NAMES[Math.round(Math.random() * (NAMES.length - 1))] + ' ' +
      NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) + '.';

  return {
    id: id.toString(),
    name: name,
    progress: Math.round(Math.random() * 1000).toString(),
    color: COLORS[Math.round(Math.random() * (COLORS.length - 1))]
  };
}

/** Constants used to fill up our data base. */
const COLORS = ['maroon', 'red', 'orange', 'yellow', 'olive', 'green', 'purple',
  'fuchsia', 'lime', 'teal', 'aqua', 'blue', 'navy', 'black', 'gray'];
const NAMES = ['Maia', 'Asher', 'Olivia', 'Atticus', 'Amelia', 'Jack',
  'Charlotte', 'Theodore', 'Isla', 'Oliver', 'Isabella', 'Jasper',
  'Cora', 'Levi', 'Violet', 'Arthur', 'Mia', 'Thomas', 'Elizabeth'];

export interface UserData {
  id: string;
  name: string;
  progress: string;
  color: string;
}
