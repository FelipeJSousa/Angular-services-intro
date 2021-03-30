import { Component, OnInit } from '@angular/core';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  num = 0;
  
  constructor(
    private _service1 : Service1Service
  ) {
    
  }
  ngOnInit(): void {
    this.num = this._service1.number;
    
  }

}
