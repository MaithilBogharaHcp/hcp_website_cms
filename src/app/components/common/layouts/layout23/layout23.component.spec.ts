import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout23Component } from './layout23.component';

describe('Layout23Component', () => {
  let component: Layout23Component;
  let fixture: ComponentFixture<Layout23Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout23Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout23Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
