import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css'],
  // providers: [Service1]
})
export class Component1Component implements OnInit {

  num = 0;
  text = "";
  
  constructor(
    private _service2 : Service2,
    private _service1 : Service1
  ) {
    
  }
  
  ngOnInit(): void {
    this.num = this._service1.number;
    this.text = this._service2.text;
  }

}
