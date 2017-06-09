import { Component,style,trigger,state,animate,keyframes,transition,group } from '@angular/core';

@Component({
  selector: 'header', 
  templateUrl:'app/header/header.html',
   animations:[
    trigger('verticalOpen',[
      state('hide',style({
            '-webkit-transform':'translate(-200px,0px)',
            'transform':'translate(-150px,0px)'
      })),
       state('show',style({
           '-webkit-transform':'translate(0px,0px)',
           'transform':'translate(0px,0px)'
      })),
       transition('hide => show', animate('100ms ease-in')),
       transition('show => hide', animate('100ms ease-out'))
    ])
  ],
  
  
})
export class headerComponent  {
   closeOrOpen:string ='hide';
   public overlayClass = "";
   public searchFocusClass ="";
   public drop = false;
   
    openNav(){
        if(this.closeOrOpen=='hide'){
            this.closeOrOpen='show',
            this.overlayClass = 'is-visible'
        }else if(this.closeOrOpen=='show'){
            this.closeOrOpen='hide' 
            this.overlayClass = ''  
        } else{
            this.closeOrOpen='hide',
             this.overlayClass = ''
        }
    }

    overlayEvent(){
      this.openNav();
    }
    searchFocus(){
      this.searchFocusClass = "is-focused"
    }
    focusOutFunction(){
      this.searchFocusClass = "searchkey";
    }
    toggle() {
      this.drop = !this.drop;
      
   }
   upDropDown(){
     this. toggle();
   }
  
 
}

