import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingStudentComponent } from './listing-student.component';

describe('ListingStudentComponent', () => {
  let component: ListingStudentComponent;
  let fixture: ComponentFixture<ListingStudentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingStudentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingStudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
