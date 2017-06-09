import { Component } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'employeeDetail', 
  templateUrl:'app/employee/employeeDetailComponent.html'
})
export class employeeDetail{ 
    constructor(private router:Router) {}
    depatments = [
        	{name:'Chals',country:'Us','id':'1'},
            {name:'Prem',country:'India','id':'2'},
            {name:'Ravi',country:'China','id':'3'}
         ]
    onSelect(depatment:any){
        this.router.navigate(['/depatments',depatment.id]);
    }
}


