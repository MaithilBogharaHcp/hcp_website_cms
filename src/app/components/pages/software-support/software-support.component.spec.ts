import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoftwareSupportComponent } from './software-support.component';

describe('SoftwareSupportComponent', () => {
  let component: SoftwareSupportComponent;
  let fixture: ComponentFixture<SoftwareSupportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SoftwareSupportComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SoftwareSupportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
