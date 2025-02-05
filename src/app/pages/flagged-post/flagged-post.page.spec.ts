import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FlaggedPostPage } from './flagged-post.page';

describe('FlaggedPostPage', () => {
  let component: FlaggedPostPage;
  let fixture: ComponentFixture<FlaggedPostPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FlaggedPostPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FlaggedPostPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
