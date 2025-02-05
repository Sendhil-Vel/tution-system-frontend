import { TestBed } from '@angular/core/testing';

import { TutorRegisterDefaultService } from './tutor-register-default.service';

describe('TutorRegisterDefaultService', () => {
  let service: TutorRegisterDefaultService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorRegisterDefaultService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
