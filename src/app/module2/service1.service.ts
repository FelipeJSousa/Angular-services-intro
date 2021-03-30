import { Injectable } from '@angular/core';
import { Module1Module } from '../module1/module1.module';
import { Module2Module } from './module2.module';

@Injectable({
  providedIn: Module1Module
})
export class Service1Service {
  public number = 0
  constructor() { 
    this.number = Math.round(Math.random()*1000);
  }
}