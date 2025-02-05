import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutorProfilesComponent } from './tutor-profiles.component';

describe('TutorProfilesComponent', () => {
  let component: TutorProfilesComponent;
  let fixture: ComponentFixture<TutorProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TutorProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutorProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
