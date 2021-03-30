import { Component, OnInit } from '@angular/core';
import { Service1 } from '../service1.service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css'],
  // providers: [Service1]
})
export class Component2Component implements OnInit {

  num = 0;
  
  constructor(
    private _service1 : Service1
  ) {
    this.num = _service1.number;

  }

  ngOnInit(): void {
  }

}
