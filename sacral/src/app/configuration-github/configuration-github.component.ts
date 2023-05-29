//Component.ts
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-configuration-github',
    templateUrl: './configuration-github.component.html',
    styleUrls: ['./configuration-github.component.css']
})

export class ConfigurationGithubComponent implements OnInit {
    errorMessage: string;

    constructor() {
        this.errorMessage = '';
    }

    ngOnInit() {
        this.errorMessage = 'NoneType object has no attribute replace';
    }
}