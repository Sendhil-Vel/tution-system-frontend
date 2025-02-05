import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidenavAgentComponent } from './sidenav-agent.component';

describe('SidenavAgentComponent', () => {
  let component: SidenavAgentComponent;
  let fixture: ComponentFixture<SidenavAgentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidenavAgentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
