import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBookBoxComponent } from './research-book-box.component';

describe('ResearchBookBoxComponent', () => {
  let component: ResearchBookBoxComponent;
  let fixture: ComponentFixture<ResearchBookBoxComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchBookBoxComponent]
    });
    fixture = TestBed.createComponent(ResearchBookBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
