import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentProfilesComponent } from './student-profiles.component';

describe('StudentProfilesComponent', () => {
  let component: StudentProfilesComponent;
  let fixture: ComponentFixture<StudentProfilesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StudentProfilesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentProfilesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
