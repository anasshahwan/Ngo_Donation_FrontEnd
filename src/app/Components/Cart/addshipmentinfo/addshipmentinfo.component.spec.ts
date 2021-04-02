import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddshipmentinfoComponent } from './addshipmentinfo.component';

describe('AddshipmentinfoComponent', () => {
  let component: AddshipmentinfoComponent;
  let fixture: ComponentFixture<AddshipmentinfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddshipmentinfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddshipmentinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
