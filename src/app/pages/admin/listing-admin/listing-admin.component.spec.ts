import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAdminComponent } from './listing-admin.component';

describe('ListingAdminComponent', () => {
  let component: ListingAdminComponent;
  let fixture: ComponentFixture<ListingAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingAdminComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
