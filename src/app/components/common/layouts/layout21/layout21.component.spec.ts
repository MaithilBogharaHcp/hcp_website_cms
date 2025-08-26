import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout21Component } from './layout21.component';

describe('Layout21Component', () => {
  let component: Layout21Component;
  let fixture: ComponentFixture<Layout21Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout21Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout21Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
