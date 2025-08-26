import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout27Component } from './layout27.component';

describe('Layout27Component', () => {
  let component: Layout27Component;
  let fixture: ComponentFixture<Layout27Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout27Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout27Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
