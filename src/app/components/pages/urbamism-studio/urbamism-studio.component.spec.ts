import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrbamismStudioComponent } from './urbamism-studio.component';

describe('UrbamismStudioComponent', () => {
  let component: UrbamismStudioComponent;
  let fixture: ComponentFixture<UrbamismStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UrbamismStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UrbamismStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
