import { Component, OnInit } from '@angular/core';
import { IMonthlySpecial } from '../interfaces/monthly-special';

@Component({
  selector: 'app-monthly-specials',
  templateUrl: './monthly-specials.component.html',
  styleUrls: ['./monthly-specials.component.css']
})
export class MonthlySpecialsComponent implements OnInit {
  public spcecial: IMonthlySpecial[];

  constructor() { }

  ngOnInit() {
  }

}
