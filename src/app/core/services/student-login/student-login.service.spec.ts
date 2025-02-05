import { TestBed } from '@angular/core/testing';

import { StudentLoginService } from './student-login.service';

describe('StudentLoginService', () => {
  let service: StudentLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StudentLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
