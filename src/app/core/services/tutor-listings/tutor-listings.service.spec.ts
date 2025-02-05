import { TestBed } from '@angular/core/testing';

import { TutorListingsService } from './tutor-listings.service';

describe('TutorListingsService', () => {
  let service: TutorListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
