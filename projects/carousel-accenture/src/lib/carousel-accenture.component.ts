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
  templateUrl: './carousel-accenture.component.html',
  styleUrls: ['./carousel-accenture.component.scss']
})
export class CarouselAccentureComponent implements OnInit {
  
  activeSlideIndex = 0;
  deviceInfo: any = null;
  cta = false;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  products: product[] = [
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iPhone-12-mini-black.png',
      productLink: 'dadsds',
      productImageAlt: 'dsadsad',
      productDescription: 'iPhone'      
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iphone-13-pro-sierra-blue.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'iPhone'      
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iphone-13-blue-front_0.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'iPhone'      
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/nokia/honor-50-5g-frost-crystal.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Honor'      
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/samsung/galaxy-a53-5g-blue.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Samsung'      
    }
    
  ]

  constructor(private deviceService: DeviceDetectorService) { }

  ngOnInit(): void {
    this.deviceInfo = this.deviceService.deviceType;
    console.log(this.deviceInfo);
  }

  prevSlide(): void{
    console.log('clicked');
    if(this.activeSlideIndex === 0){
      this.activeSlideIndex = this.products.length - 1;
    }else{
      this.activeSlideIndex--;
      console.log(this.activeSlideIndex);
    }
  }
  nextSlide(): void{
    console.log('clicked');
    if(this.activeSlideIndex === this.products.length - 1){
      this.activeSlideIndex = 0;
    }else{
      this.activeSlideIndex++;
      console.log(this.activeSlideIndex);
    }
  }

  shiftItem(arr: any , new_index: any, old_index: any){
    let el = arr[old_index];
    arr.splice(old_index, 1);
    arr.splice(new_index, 0, el);
    console.log(arr)
  }
}
