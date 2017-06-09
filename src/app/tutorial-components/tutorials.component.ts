import { Component } from '@angular/core';

@Component({
  selector: 'my-tutorials',
  template: `<h2>{{title}}</h2>
  			<button (click)="onClick()">Click Me</button>
  			<input type="text" [(ngModel)]="value1">`,
})
export class tutorialsComponent{
	public title="tutorial Heading";
	value1: string;
	onClick(){
		console.log(this.value1);
	}
}