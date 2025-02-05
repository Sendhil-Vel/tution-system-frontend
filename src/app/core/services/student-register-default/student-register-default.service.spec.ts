import { TestBed } from '@angular/core/testing';

import { StudentRegisterDefaultService } from './student-register-default.service';

describe('StudentRegisterDefaultService', () => {
  let service: StudentRegisterDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentRegisterDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
