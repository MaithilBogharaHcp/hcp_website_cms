import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout19Component } from './layout19.component';

describe('Layout19Component', () => {
  let component: Layout19Component;
  let fixture: ComponentFixture<Layout19Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout19Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout19Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
