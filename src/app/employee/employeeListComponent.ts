import { Component,OnInit } from '@angular/core';
import { EmployeeServices } from './employeeService';
@Component({
  selector: 'employeeList', 
  templateUrl:'app/employee/employeeListComponent.html',
  providers:[EmployeeServices]
})
export class employeeList implements OnInit{ 
	employees: any[] ;
	constructor(private _employeeService: EmployeeServices){}
	ngOnInit(){
		this._employeeService.getEmployees().subscribe(resEmployeeData => this.employees = resEmployeeData)
	}
	
}  

