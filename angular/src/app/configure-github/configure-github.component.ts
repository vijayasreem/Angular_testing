import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-configure-github',
  templateUrl: './configure-github.component.html',
  styleUrls: ['./configure-github.component.scss']
})
export class ConfigureGithubComponent implements OnInit {

  configureForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.configureForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      url: ['', Validators.required],
      repoName: ['', Validators.required],
      noOfEntries: ['', Validators.required]
    });
  }

  onSubmit() {
    // handle the form submission here
  }

}