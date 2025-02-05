import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostListingPages } from './post-listing.pages';

describe('PostListingPages', () => {
  let component: PostListingPages;
  let fixture: ComponentFixture<PostListingPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PostListingPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PostListingPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
