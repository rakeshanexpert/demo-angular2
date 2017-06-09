import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser'; //browser module
import { FormsModule } from '@angular/forms'; //form module
import { ReactiveFormsModule } from '@angular/forms';
// import { RouterModule } from '@angular/router'; //include for routing
import { HttpModule } from '@angular/http'; //includer for services
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { Approutingmodel } from './app.routemodel'; //export routing module for saperate link path
import { routingComponents } from './app.routemodel'; //export routing module for saperate link path

import { AppComponent }  from './app.component';
import { headerComponent } from './header/headerComponents';
import { navComponent } from './nav/navComponents';
import { footerComponent } from './footer/footerComponents';
import { employeeList} from './employee/employeeListComponent';
import { employeeDetail} from './employee/employeeDetailComponent';
import {FilterPipe} from './sport/filterPipe';  

@NgModule({
imports: [ BrowserModule,
		  FormsModule,
		  ReactiveFormsModule,
		  HttpModule,
		  Approutingmodel,
		  BrowserAnimationsModule	
		  	
		],
  declarations: [ AppComponent,
  				  headerComponent,
  				  navComponent,
				  footerComponent,
				  employeeList,
  				  employeeDetail,
				  routingComponents,
				  FilterPipe
  				],

  bootstrap:    [ AppComponent ]
})
export class AppModule { }
