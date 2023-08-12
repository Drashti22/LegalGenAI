import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBookDashComponent } from './research-book-dash.component';

describe('ResearchBookDashComponent', () => {
  let component: ResearchBookDashComponent;
  let fixture: ComponentFixture<ResearchBookDashComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchBookDashComponent]
    });
    fixture = TestBed.createComponent(ResearchBookDashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
