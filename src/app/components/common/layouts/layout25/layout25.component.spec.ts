import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout25Component } from './layout25.component';

describe('Layout25Component', () => {
  let component: Layout25Component;
  let fixture: ComponentFixture<Layout25Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout25Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout25Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
