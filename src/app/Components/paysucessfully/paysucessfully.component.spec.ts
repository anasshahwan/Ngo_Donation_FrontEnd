import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaysucessfullyComponent } from './paysucessfully.component';

describe('PaysucessfullyComponent', () => {
  let component: PaysucessfullyComponent;
  let fixture: ComponentFixture<PaysucessfullyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PaysucessfullyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PaysucessfullyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
