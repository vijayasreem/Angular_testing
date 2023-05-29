import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubConfigComponent } from './github-config/github-config.component';
import { ConfigurationComponent } from './configuration/configuration.component';
import { ConfigurationGithubComponent } from './configuration-github/configuration-github.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubConfigComponent,
    ConfigurationComponent,
    ConfigurationGithubComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
