import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { OrgChartModule } from 'ng2-org-chart';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {OrganizationChartModule} from 'primeng/organizationchart';
import {TreeModule} from 'primeng/tree';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    OrgChartModule,
    OrganizationChartModule,
    TreeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
