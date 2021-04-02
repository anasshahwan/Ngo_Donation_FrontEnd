import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllDonationsComponent } from './all-donations.component';

describe('AllDonationsComponent', () => {
  let component: AllDonationsComponent;
  let fixture: ComponentFixture<AllDonationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllDonationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllDonationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
