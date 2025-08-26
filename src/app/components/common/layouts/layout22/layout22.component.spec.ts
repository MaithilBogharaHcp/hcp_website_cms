import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Layout22Component } from './layout22.component';

describe('Layout22Component', () => {
  let component: Layout22Component;
  let fixture: ComponentFixture<Layout22Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Layout22Component]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(Layout22Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
