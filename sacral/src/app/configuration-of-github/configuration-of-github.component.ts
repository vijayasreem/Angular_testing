//Component.ts

import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-configuration-of-github',
  templateUrl: './configuration-of-github.component.html',
  styleUrls: ['./configuration-of-github.component.css']
})
export class ConfigurationOfGithubComponent implements OnInit {

  public errorMsg: string;

  constructor() {
    this.errorMsg = "'NoneType' object has no attribute 'replace'";
  }

  ngOnInit() {
  }

}