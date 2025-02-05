import { TestBed } from '@angular/core/testing';

import { UpdateFlaggedPostService } from './update-flagged-post.service';

describe('UpdateFlaggedPostService', () => {
  let service: UpdateFlaggedPostService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateFlaggedPostService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
