import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddcartitemsComponent } from './addcartitems.component';

describe('AddcartitemsComponent', () => {
  let component: AddcartitemsComponent;
  let fixture: ComponentFixture<AddcartitemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddcartitemsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddcartitemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
