import { Component,OnInit } from '@angular/core';
import { sportServices } from './sport-services';
import {FilterPipe} from './filterPipe';

@Component({
  selector: 'sport', 
  templateUrl:'app/sport/sport.html',
  providers:[sportServices]
})

export class sportAppComponent implements OnInit{
    sportJsonData: any[];
    constructor(private _sportServices: sportServices){}
     ngOnInit(){
            this._sportServices.getSportServices().subscribe(resSportData => this.sportJsonData = resSportData)
        }

}