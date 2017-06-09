import { Injectable } from '@angular/core';
import { Http,Response } from '@angular/http';
import 'rxjs/add/operator/map'

@Injectable()
export class EmployeeServices {
  private jsonUrl = "apidata/employee.json";
  constructor(private http:Http){}
  getEmployees(){
	  //console.log(this.jsonUrl)
    return this.http.get(this.jsonUrl).map((response:Response)=>response.json());
  }
} 
