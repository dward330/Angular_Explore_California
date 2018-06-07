import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PageBottomComponent } from './page-bottom/page-bottom.component';
import { PageHeaderComponent } from './page-header/page-header.component';
import { MonthlySpecialsComponent } from './monthly-specials/monthly-specials.component';

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
    RouterModule.forRoot([{path: '', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
