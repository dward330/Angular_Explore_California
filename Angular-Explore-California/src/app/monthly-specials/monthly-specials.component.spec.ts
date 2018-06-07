import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonthlySpecialsComponent } from './monthly-specials.component';

describe('MonthlySpecialsComponent', () => {
  let component: MonthlySpecialsComponent;
  let fixture: ComponentFixture<MonthlySpecialsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonthlySpecialsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonthlySpecialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
