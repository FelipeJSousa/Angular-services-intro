import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Component1Component } from './component1/component1.component';
import { Component2Component } from './component2/component2.component';
import { MatCardModule } from '@angular/material/card'
import { Service1 } from './service1.service';



@NgModule({
  declarations: [Component1Component, Component2Component],
  exports: [Component1Component, Component2Component],
  imports: [
    CommonModule,
    MatCardModule
  ],
  providers: [Service1]
})
export class Module1Module { }
