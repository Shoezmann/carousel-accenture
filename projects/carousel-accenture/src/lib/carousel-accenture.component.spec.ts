import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselAccentureComponent } from './carousel-accenture.component';

describe('CarouselAccentureComponent', () => {
  let component: CarouselAccentureComponent;
  let fixture: ComponentFixture<CarouselAccentureComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselAccentureComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselAccentureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
