import { Component, OnInit } from '@angular/core';
import { Service2 } from 'src/app/service2.service';
import { Service1Service } from '../service1.service';

@Component({
  selector: 'app-component4',
  templateUrl: './component4.component.html',
  styleUrls: ['./component4.component.css']
})
export class Component4Component implements OnInit {

  num = 0;
  text = "";
  
  constructor(
    private _service2 : Service2,
    private _service1 : Service1Service
  ) {
    
  }
  
  ngOnInit(): void {
    this.num = this._service1.number;
    this.text = this._service2.text;
  }

}
