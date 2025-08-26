import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrochuresDetailsComponent } from './brochures-details.component';

describe('BrochuresDetailsComponent', () => {
  let component: BrochuresDetailsComponent;
  let fixture: ComponentFixture<BrochuresDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrochuresDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BrochuresDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
