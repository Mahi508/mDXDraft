import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0' })),
      state('expanded', style({ height: '*' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ],
})
export class HomeComponent {

  isTableExpanded = false;

  STUDENTS_DATA = [
    {
      "id": 4516542,
      "name": "Sankara Indore",
      "age": "Failed",
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": "Bill Error",
          "type": "Unknown Error"
        },
        {
          "name": "Bill Error",
          "type": "Missing Deposit",

        },
        {
          "name": "Bill Error",
          "type": "Missing Advance",

        }
      ]
    },
    {
      "id": 2214323,
      "name": "Sankara Guntur",
      "age": "Success",
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": " ",
          "type": " ",

        },
        {
          "name": " ",
          "type": " ",
        },
        {
          "name": " ",
          "type": " ",
        }
      ]
    },
    {
      "id": 365181,
      "name": "Sankara Kanpur",
      "age": "Failed",
      "address": 1.0079,
      "isExpanded": false,
      "subjects": [
        {
          "name": "Bill Error",
          "type": "Unknown Error"
        },
        {
          "name": "Bill Error",
          "type": "Missing Deposit",

        },
        {
          "name": "Bill Error",
          "type": "Missing Advance",
        }
      ]
    }
  ];


  dataStudentsList = new MatTableDataSource();
  displayedStudentsColumnsList: string[] = ['id', 'name', 'age', 'address', 'actions'];


  ngOnInit() {
    this.dataStudentsList.data = this.STUDENTS_DATA;
  }

  // Toggel Rows
  toggleTableRows() {
    this.isTableExpanded = !this.isTableExpanded;

    this.dataStudentsList.data.forEach((row: any) => {
      row.isExpanded = this.isTableExpanded;
    });
  }

}
