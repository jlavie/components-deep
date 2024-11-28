import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardStructureComponent } from './dashboard-structure.component';

describe('DashboardStructureComponent', () => {
  let component: DashboardStructureComponent;
  let fixture: ComponentFixture<DashboardStructureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardStructureComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
