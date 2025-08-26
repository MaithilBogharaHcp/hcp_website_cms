import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout28Component } from './layout28.component';

describe('Layout28Component', () => {
  let component: Layout28Component;
  let fixture: ComponentFixture<Layout28Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout28Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout28Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
