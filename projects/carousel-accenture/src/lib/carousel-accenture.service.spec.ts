import { TestBed } from '@angular/core/testing';

import { CarouselAccentureService } from './carousel-accenture.service';

describe('CarouselAccentureService', () => {
  let service: CarouselAccentureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CarouselAccentureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
