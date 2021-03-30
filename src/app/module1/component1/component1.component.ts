import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  // providers: [Service1]
})
export class Component1Component implements OnInit {

  num = 0;
  
  constructor(
    private _service1 : Service1
  ) {
    
  }
  
  ngOnInit(): void {
    this.num = this._service1.number;
  }

}
