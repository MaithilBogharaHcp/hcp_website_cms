import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModelMakingComponent } from './model-making.component';

describe('ModelMakingComponent', () => {
  let component: ModelMakingComponent;
  let fixture: ComponentFixture<ModelMakingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModelMakingComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ModelMakingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
