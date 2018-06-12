import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { PageBottomComponent } from './page-bottom/page-bottom.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MonthlySpecialsComponent } from './monthly-specials/monthly-specials.component';

import { MonthlySpecialService } from './services/monthly-special.service';

@NgModule({
  declarations: [
    AppComponent,
    PageBottomComponent,
    PageHeaderComponent,
    MonthlySpecialsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([{path: 'home', component: AppComponent}]),
    CommonModule
  ],
  providers: [MonthlySpecialService],
  bootstrap: [AppComponent]
})
export class AppModule { }
