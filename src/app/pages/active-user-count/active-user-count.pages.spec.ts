import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActiveUserCountPages } from './active-user-count.pages';

describe('ActiveUserCountPages', () => {
  let component: ActiveUserCountPages;
  let fixture: ComponentFixture<ActiveUserCountPages>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActiveUserCountPages]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActiveUserCountPages);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
