import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

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
  
  activeSlideIndex = 0


  products: product[] = [
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
    },
    {
      productImage: 'https://pics.freeicons.io/uploads/icons/png/6437601791655962451-512.png',
      productLink: '',
      productImageAlt: '',
      productDescription: 'Item'      
    }
    
  ]

  @ViewChild('item') swap!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    console.log(this.swap.nativeElement.value);
  }

  prevSlide(): void{
    console.log('clicked');
    if(this.activeSlideIndex === 0){
      this.activeSlideIndex = this.products.length - 1;
    }else{
      this.activeSlideIndex--;
    }
  }
  nextSlide(): void{
    console.log('clicked');
    if(this.activeSlideIndex === this.products.length - 1){
      this.activeSlideIndex = 0;
    }else{
      this.activeSlideIndex++;
    }
  }
}
