import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, ModuleWithProviders, NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CarouselAccentureComponent } from './carousel-accenture.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ItemComponent } from './item/item.component';

@NgModule({
  declarations: [
    CarouselAccentureComponent,
    ItemComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  exports: [ItemComponent]
})
export class CarouselAccentureModule {
}
