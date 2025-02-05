import { TestBed } from '@angular/core/testing';

import { TutorLoginService } from './tutor-login.service';

describe('TutorLoginService', () => {
  let service: TutorLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutorLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
