import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

import { DeviceDetectorService } from 'ngx-device-detector';
// import { faCoffee } from '@fortawesome/free-solid-svg-icons';

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

  // faCoffe = faCoffee;

  products: product[] = [
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: 'dadsds',
      productImageAlt: 'dsadsad',
      productDescription: 'Item'      
    },
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Item'      
    },
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Item'      
    },
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Item'      
    },
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Item'      
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
