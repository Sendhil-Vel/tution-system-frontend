import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavTutorComponent } from './sidenav-tutor.component';

describe('SidenavTutorComponent', () => {
  let component: SidenavTutorComponent;
  let fixture: ComponentFixture<SidenavTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
