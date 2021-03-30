import { Injectable } from "@angular/core";

@Injectable()
export class Service1{
    public number: number;
    constructor () {
        this.number = Math.round(Math.random()*1000);
        console.log(`Service1 constructor()`)
    }
}