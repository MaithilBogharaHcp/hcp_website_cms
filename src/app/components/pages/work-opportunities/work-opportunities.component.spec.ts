import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WorkOpportunitiesComponent } from './work-opportunities.component';

describe('WorkOpportunitiesComponent', () => {
  let component: WorkOpportunitiesComponent;
  let fixture: ComponentFixture<WorkOpportunitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WorkOpportunitiesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(WorkOpportunitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
