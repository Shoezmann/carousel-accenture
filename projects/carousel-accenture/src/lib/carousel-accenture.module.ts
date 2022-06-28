import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CarouselAccentureComponent } from './carousel-accenture.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'
@NgModule({
  declarations: [
    CarouselAccentureComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule
  ],
  exports: [
    CarouselAccentureComponent
  ]
})
export class CarouselAccentureModule { }
