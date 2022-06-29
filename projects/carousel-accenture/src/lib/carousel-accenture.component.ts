import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

interface product {
  productImage: string;
  productLink: string;
  productImageAlt: string;
  productDescription: string;
}
@Component({
  selector: 'lib-carousel-accenture',
  template: ``,
  styles: []
})
export class CarouselAccentureComponent implements OnInit {

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
  }
}
