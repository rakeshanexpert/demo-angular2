import { Component,OnInit } from '@angular/core';
import { HomeServices } from './home-services';

@Component({
  selector: 'home', 
  templateUrl:'app/home/home.html',
  providers:[HomeServices]
  
})
export class homeComponent implements OnInit{ 
	homeJsonData: any[] ;
	constructor(private _homeService: HomeServices){}
	ngOnInit(){
		this._homeService.getHomeServices().subscribe(resEmployeeData => this.homeJsonData = resEmployeeData)
	}
	
}  