import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureStudioComponent } from './architecture-studio.component';

describe('ArchitectureStudioComponent', () => {
  let component: ArchitectureStudioComponent;
  let fixture: ComponentFixture<ArchitectureStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureStudioComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
