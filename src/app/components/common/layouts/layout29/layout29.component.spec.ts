import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout29Component } from './layout29.component';

describe('Layout29Component', () => {
  let component: Layout29Component;
  let fixture: ComponentFixture<Layout29Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout29Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout29Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
