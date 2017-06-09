import { NgModule }      from '@angular/core';
import { RouterModule,Routes } from '@angular/router';

//Include Routing Component
import { aboutComponent } from './about/aboutComponent';
import { homeComponent } from './home/homeComponent';
import { formdataComponent } from './formdata/formdataComponent';
import { sportAppComponent } from './sport/sportComponent';
import { employeeDetailDepatment } from './employee/employee-Detail-depatment';
const routes: Routes = [
		   		{
		   			path:'',
		   			component:homeComponent
		   		},
		   		{
		   			path:'home',
		   			component:homeComponent
		   		},
		   		{
		   			path:'about',
		   			component:aboutComponent
		   		},
		   		{
		   			path:'contact',
		   			component:formdataComponent
		   		},
                   {
		   			path:'sport',
		   			component:sportAppComponent
		   		},
                   {
		   			path:'depatments/:id',
		   			component:employeeDetailDepatment
		   		}
		   		
		   	];
@NgModule({
    imports: [ 
        RouterModule.forRoot(routes)
    ],
    exports:[
       RouterModule 
    ]
              
})
export class Approutingmodel{}
export const routingComponents = [aboutComponent,homeComponent,formdataComponent,sportAppComponent,employeeDetailDepatment	]