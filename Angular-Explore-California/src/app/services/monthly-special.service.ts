import { Injectable, OnDestroy } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { Observable } from 'rxjs';

import { IMonthlySpecial } from '../interfaces/monthly-special';
import { error } from 'util';

@Injectable({
  providedIn: 'root'
})
export class MonthlySpecialService implements OnDestroy {
  // url = '../../assets/data/specials.json';
  url = 'http://localhost:34555/api/Data/GetMonthlySpecials';
  specials: Observable<IMonthlySpecial[]>;

  constructor(private httpClient: HttpClient) {
  }

  // Get Monthly Specials from Server
  getSpecials(): Observable<IMonthlySpecial[]> {
    if (!this.specials) {
      this.specials = this.httpClient.get<IMonthlySpecial[]>(this.url);
      return this.specials;
    }
    // tslint:disable-next-line:one-line
    else {
      return this.specials;
    }
  }

  // Logs Errors to the Consoles
  private handleError(err: string) {
    console.log('Error Occured: ' + err);
  }

  ngOnDestroy(): void {
    console.log('Monthly-Special Service has been destroyed!');
  }
}
