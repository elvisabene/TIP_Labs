import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dialog-windows',
  templateUrl: './dialog-windows.component.html',
  styleUrls: ['./dialog-windows.component.css']
})
export class DialogWindowsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const middleName = prompt("Enter your middle name:");
    const firstName = prompt("Enter your first name:");
    const lastName = prompt("Enter your last name:");
    const fullName = `${middleName} ${firstName} ${lastName}`;

    const isRightName = confirm(`${fullName}\nIs that right?`);

    isRightName
      ? alert(`Well done,\n${fullName}`)
      : alert("Data error")
  }

}
