import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration',
  templateUrl: './configuration.component.html',
  styleUrls: ['./configuration.component.css']
})
export class ConfigurationComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  // Error Handling
  handleError(error: any) {
    if (error && error.hasOwnProperty('replace')) {
      return error.replace('NoneType', 'String');
    }
  }

}