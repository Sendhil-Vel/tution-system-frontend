import { TestBed } from '@angular/core/testing';

import { FlaggedPostsService } from './flagged-posts.service';

describe('FlaggedPostsService', () => {
  let service: FlaggedPostsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlaggedPostsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
