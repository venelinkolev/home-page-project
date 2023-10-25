import { Component } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import UserData from 'src/app/interfaces/user';


const FRUITS: string[] = [
  'blueberry',
  'lychee',
  'kiwi',
  'mango',
  'peach',
  'lime',
  'pomegranate',
  'pineapple',
];
const NAMES: string[] = [
  'Maia',
  'Asher',
  'Olivia',
  'Atticus',
  'Amelia',
  'Jack',
  'Charlotte',
  'Theodore',
  'Isla',
  'Oliver',
  'Isabella',
  'Jasper',
  'Cora',
  'Levi',
  'Violet',
  'Arthur',
  'Mia',
  'Thomas',
  'Elizabeth',
];

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})

export class DashboardComponent {
  dataSource: MatTableDataSource<UserData>

  constructor() {
    const users = Array.from({ length: 100 }, (_, k) => createNewUser(k + 1));

    this.dataSource = new MatTableDataSource(users);
  }

}

function createNewUser(id: number): UserData {
  const name =
    NAMES[Math.round(Math.random() * (NAMES.length - 1))] +
    ' ' +
    NAMES[Math.round(Math.random() * (NAMES.length - 1))].charAt(0) +
    '.';

  return {
    position: id.toString(),
    dateOfSave: name,
    documentType: Math.round(Math.random() * 100).toString(),
    numberOfDocument: FRUITS[Math.round(Math.random() * (FRUITS.length - 1))],
  };
}