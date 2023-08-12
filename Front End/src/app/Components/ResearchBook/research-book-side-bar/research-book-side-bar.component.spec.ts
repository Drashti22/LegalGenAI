import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBookSideBarComponent } from './research-book-side-bar.component';

describe('ResearchBookSideBarComponent', () => {
  let component: ResearchBookSideBarComponent;
  let fixture: ComponentFixture<ResearchBookSideBarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ResearchBookSideBarComponent]
    });
    fixture = TestBed.createComponent(ResearchBookSideBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
