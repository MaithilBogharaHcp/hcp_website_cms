import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout24Component } from './layout24.component';

describe('Layout24Component', () => {
  let component: Layout24Component;
  let fixture: ComponentFixture<Layout24Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout24Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout24Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
