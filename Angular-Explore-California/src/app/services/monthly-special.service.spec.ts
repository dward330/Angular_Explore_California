import { TestBed, inject } from '@angular/core/testing';

import { MonthlySpecialService } from './monthly-special.service';

describe('MonthlySpecialService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MonthlySpecialService]
    });
  });

  it('should be created', inject([MonthlySpecialService], (service: MonthlySpecialService) => {
    expect(service).toBeTruthy();
  }));
});
