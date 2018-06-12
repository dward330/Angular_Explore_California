import { Component, OnInit } from '@angular/core';
import { IMonthlySpecial } from '../interfaces/monthly-special';

import { MonthlySpecialService } from '../services/monthly-special.service';

@Component({
  selector: 'app-monthly-specials',
  templateUrl: './monthly-specials.component.html',
  styleUrls: ['./monthly-specials.component.css']
})
export class MonthlySpecialsComponent implements OnInit {
  public specials: IMonthlySpecial[];

  constructor(private _specialService: MonthlySpecialService) {
   }

  ngOnInit() {
    console.log('Monthly Special Component Initialized');
    this._specialService.getSpecials().subscribe((data) => {this.specials = data;
                                                            console.log('Return Data of Monthly Speicals:' + JSON.stringify(this.specials));
                                                           }
                                                           , (err) => { this.handleError(err); });
   }

  // Logs Errors to the Consoles
  private handleError(err: string) {
    console.log('Error Occured: ' + err);
  }

}
