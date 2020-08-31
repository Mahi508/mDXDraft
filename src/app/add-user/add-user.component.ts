import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  constructor() { }
  panelOpenState = true;
  panelOpenState2 = false;
  ngOnInit(): void {
  }

}
