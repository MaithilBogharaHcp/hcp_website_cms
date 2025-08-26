import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout20Component } from './layout20.component';

describe('Layout20Component', () => {
  let component: Layout20Component;
  let fixture: ComponentFixture<Layout20Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout20Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout20Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
