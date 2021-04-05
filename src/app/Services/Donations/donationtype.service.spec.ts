import { TestBed } from '@angular/core/testing';

import { DonationtypeService } from './donationtype.service';

describe('DonationtypeService', () => {
  let service: DonationtypeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationtypeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
