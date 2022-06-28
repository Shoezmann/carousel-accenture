import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselAccentureComponent } from './carousel-accenture.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [
    CarouselAccentureComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [
    CarouselAccentureComponent
  ]
})
export class CarouselAccentureModule { }
