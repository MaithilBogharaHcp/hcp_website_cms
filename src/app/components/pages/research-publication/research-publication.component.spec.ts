import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchPublicationComponent } from './research-publication.component';

describe('ResearchPublicationComponent', () => {
  let component: ResearchPublicationComponent;
  let fixture: ComponentFixture<ResearchPublicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResearchPublicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ResearchPublicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
