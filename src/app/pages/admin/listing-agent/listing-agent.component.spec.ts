import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListingAgentComponent } from './listing-agent.component';

describe('ListingAgentComponent', () => {
  let component: ListingAgentComponent;
  let fixture: ComponentFixture<ListingAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListingAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListingAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
