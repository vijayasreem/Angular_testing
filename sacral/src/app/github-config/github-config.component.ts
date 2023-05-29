import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-github-config',
  template: `
    <div>
      <h1>Github Configuration</h1>
      <div>
        {{ errorMessage }}
      </div>
    </div>
  `,
  styleUrls: ['./github-config.component.css']
})
export class GithubConfigComponent implements OnInit {
  @Input() errorMessage: string;

  constructor() { }

  ngOnInit() {
  }

}