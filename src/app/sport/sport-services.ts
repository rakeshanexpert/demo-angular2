import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class sportServices {
    private sportJsonData = "apidata/filterdata.json";
    constructor(private _http: Http){}
    getSportServices(){
       // console.log(this.sportJsonData);
        return this._http.get(this.sportJsonData).map((response:Response)=>response.json())
    }
}