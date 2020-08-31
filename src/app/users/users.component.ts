import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MaterialModule } from '../angular-material.module';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { UserserviceService } from '../userservice.service';
import { User } from "./users";
import { HttpClient } from '@angular/common/http';
import { AddUserComponent } from '../add-user/add-user.component';
// import 'rxjs/add/operator/toPromise';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  res: any;

  displayedColumns = ['name', 'phone', 'email', 'active', 'actions'];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  searchKey: string;

  constructor(private dialog: MatDialog, private router: Router, private service: UserserviceService, private http: HttpClient) {

  }
  listData: MatTableDataSource<any>;

  ngAfterViewInit() {
    this.getUsers();
  }
  public async getUsers() {
    this.res = await this.http.get('https://raw.githubusercontent.com/varaprasadreddy9676/FakeServer/master/users.json').toPromise();
    console.log(this.res.users);
    this.listData = new MatTableDataSource(this.res.users);
    this.listData.sort = this.sort;
    this.listData.paginator = this.paginator;
    // console.log(this.listData);
    // this.listData.filterPredicate = (data, filter) => {
    //   return this.displayedColumns.some(ele => {
    //     return ele !== 'actions' && data[ele].toLowerCase().indexOf(filter) !== -1;
    //   });
    // };

  }
  onSearchClear() {
    this.searchKey = "";
    // this.applyFilter();
  }


  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.listData.filter = filterValue;
  }
  addUser() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    dialogConfig.width = '60%';
    this.dialog.open(AddUserComponent, dialogConfig);
    // this.router.navigate(['/adduser']);
  }
  deleteUser(){
    alert("Are you sure want to delete?")
  }


}




