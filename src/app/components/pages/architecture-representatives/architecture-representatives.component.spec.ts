import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureRepresentativesComponent } from './architecture-representatives.component';

describe('ArchitectureRepresentativesComponent', () => {
  let component: ArchitectureRepresentativesComponent;
  let fixture: ComponentFixture<ArchitectureRepresentativesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureRepresentativesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureRepresentativesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
