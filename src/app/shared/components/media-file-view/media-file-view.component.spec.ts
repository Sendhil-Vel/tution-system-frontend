import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaFileViewComponent } from './media-file-view.component';

describe('MediaFileViewComponent', () => {
  let component: MediaFileViewComponent;
  let fixture: ComponentFixture<MediaFileViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MediaFileViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MediaFileViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
