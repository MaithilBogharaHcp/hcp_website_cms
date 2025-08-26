import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LgLandingPageComponent } from './lg-landing-page.component';

describe('LgLandingPageComponent', () => {
  let component: LgLandingPageComponent;
  let fixture: ComponentFixture<LgLandingPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LgLandingPageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(LgLandingPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
