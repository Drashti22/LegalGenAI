import { TestBed } from '@angular/core/testing';

import { ResearchBookService } from './api-service.service';

describe('ApiServiceService', () => {
  let service: ResearchBookService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResearchBookService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
