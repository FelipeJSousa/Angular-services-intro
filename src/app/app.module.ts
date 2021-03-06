import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MatSlideToggleModule } from '@angular/material/slide-toggle'


import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Module1Module } from './module1/module1.module'
import { Module2Module } from './module2/module2.module'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    Module1Module,
    Module2Module,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
