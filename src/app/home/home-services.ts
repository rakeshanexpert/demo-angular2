import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class HomeServices {
    private homeJson = 'apidata/home.json';
    constructor(private _http:Http){ }
    getHomeServices(){
        console.log(this.homeJson);
        return this._http.get(this.homeJson).map((response:Response)=>response.json())
    }
}
