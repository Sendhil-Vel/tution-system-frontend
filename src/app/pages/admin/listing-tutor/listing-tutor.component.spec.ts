import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingTutorComponent } from './listing-tutor.component';

describe('ListingTutorComponent', () => {
  let component: ListingTutorComponent;
  let fixture: ComponentFixture<ListingTutorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingTutorComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingTutorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
