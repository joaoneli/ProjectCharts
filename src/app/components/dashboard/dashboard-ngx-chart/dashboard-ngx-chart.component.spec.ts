import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardNgxChartComponent } from './dashboard-ngx-chart.component';

describe('DashboardNgxChartComponent', () => {
  let component: DashboardNgxChartComponent;
  let fixture: ComponentFixture<DashboardNgxChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardNgxChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardNgxChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
