import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { PageBottomComponent } from './page-bottom/page-bottom.component';
import { PageHeaderComponent } from './page-header/page-header.component';

@NgModule({
  declarations: [
    AppComponent,
    PageBottomComponent,
    PageHeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([{path: '', component: AppComponent}])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
