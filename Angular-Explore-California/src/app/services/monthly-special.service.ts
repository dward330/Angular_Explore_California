import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { Observable } from 'rxjs';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
// import { ErrorObservable } from 'rxjs/observable';

import { IMonthlySpecial } from '../interfaces/monthly-special';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MonthlySpecialService implements OnDestroy {
  url = 'urlToUse';
  specials: Observable<IMonthlySpecial[]>;

  constructor(private httpClient: HttpClient) { }

  // Get Monthly Specials from Server
  getSpecials(): Observable<IMonthlySpecial[]> {
    if (!this.specials) {
      try {
      this.specials = this.httpClient.get<IMonthlySpecial[]>(this.url);
      this.specials.subscribe((data) => {console.log('Return Data of Monthly Speicals:' + JSON.stringify(data)); }
                             , (err) => { this.handleError(err); });
      } catch (error) {
        this.handleError(error);
      }
      return this.specials;
    }
    // tslint:disable-next-line:one-line
    else {
      return this.specials;
    }
  }

  // Logs Errors to the Consoles
  private handleError(err: any) {
    console.log('Error Occured: ' + err);
  }

  ngOnDestroy(): void {
    console.log('Monthly-Special Service has been destroyed!');
  }
}
