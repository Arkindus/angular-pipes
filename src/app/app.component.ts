import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipes';
  serverArray = [
    {
      name: 'Production',
      status: 'Active',
      createdOn: new Date()
    },
    {
      name: 'Database Server',
      status: 'Standby',
      createdOn: new Date()
    },
    {
      name: 'Testing & Validation Server',
      status: 'Inactive',
      createdOn: new Date()
    }
  ];
}
