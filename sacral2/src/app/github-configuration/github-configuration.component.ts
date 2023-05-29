import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-github-configuration',
  template: `
    <div>
      <p>Configuration of github</p>
      <p>{{ error }}</p>
    </div>
  `,
  styleUrls: ['./github-configuration.component.css']
})
export class GithubConfigurationComponent implements OnInit {
  error = { error: "'NoneType' object has no attribute 'replace'" };

  constructor() { }

  ngOnInit() {
  }

}