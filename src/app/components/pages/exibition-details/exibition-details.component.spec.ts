import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExibitionDetailsComponent } from './exibition-details.component';

describe('ExibitionDetailsComponent', () => {
  let component: ExibitionDetailsComponent;
  let fixture: ComponentFixture<ExibitionDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ExibitionDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ExibitionDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
