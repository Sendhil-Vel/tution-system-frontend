import { TestBed } from '@angular/core/testing';

import { StudentListingsService } from './student-listings.service';

describe('StudentListingsService', () => {
  let service: StudentListingsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentListingsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
