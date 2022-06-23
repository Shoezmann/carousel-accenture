import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselAccentureComponent } from './carousel-accenture.component';



@NgModule({
  declarations: [
    CarouselAccentureComponent
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  exports: [
    CarouselAccentureComponent
  ]
})
export class CarouselAccentureModule { }
