import { Component, OnInit } from '@angular/core';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { DeviceDetectorService } from 'ngx-device-detector';

interface product {
  productImage: string;
  productLink: string;
  productImageAlt: string;
  productDescription: string;
  order: number;
}
@Component({
  selector: 'lib-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  activeSlideIndex = 0;
  deviceInfo: any = null;

  faChevronLeft = faChevronLeft;
  faChevronRight = faChevronRight;

  products: product[] = [
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iPhone-12-mini-black.png',
      productLink: 'dadsds',
      productImageAlt: 'dsadsad',
      productDescription: 'iPhone',
      order: 1
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iphone-13-pro-sierra-blue.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'iPhone',
      order: 1
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/apple/iphone-13-blue-front_0.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'iPhone',
      order: 3
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/nokia/honor-50-5g-frost-crystal.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Honor',
      order: 4
    },
    {
      productImage: 'https://onlinecms.mtn.co.za/sites/default/files/product-images/samsung/galaxy-a53-5g-blue.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Samsung',
      order: 5
    }

  ]

  constructor() { }

  ngOnInit(): void {

  }

  prevSlide(){
    console.log('clicked');
    if(this.activeSlideIndex === 0){
      this.activeSlideIndex = this.products.length - 1;

    }else{
      this.activeSlideIndex--;

    //   for(let i = 0; i < this.products.length; i++){
    //     console.log(this.products[i]);
    //     [this.products[this.activeSlideIndex], this.products[i] ] = [this.products[i], this.products[this.activeSlideIndex]];
    //     return this.products;
    // }
  }}

  nextSlide(){
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
