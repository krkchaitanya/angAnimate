import { Component ,trigger,state,style, transition,animate} from '@angular/core';
//import {state,style} from "@angular/animations";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { animate } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divState',[
      state('normal',style({
        backgroundColor:'lightgreen',
        transform:'translateX(0)'
      })),
      state('highlighted',style({
        backgroundColor:'lightblue',
        transform:'translateX(100px)'
      })),
      transition('normal <=> highlighted',animate(300))
      // transition('highlighted => normal', animate(800))
    ]),

    trigger('wildState',[
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(100px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),  
      transition('normal => highlighted',animate(300)),
      transition('highlighted => normal',animate(600)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange'
        }),
        animate(1000, style({
          borderRadius: '50px'
        })),
        animate(500)
      ])
    ])
  ]
})
export class AppComponent {
  
  state='normal';
  wildState="normal";

  
  onAnimate(){
    //........ ternary opeartor...for two way opeartion.....
    this.state=='normal'?this.state='highlighted':this.state="normal";
    this.wildState='normal'?this.wildState='highlighted':this.wildState='normal';
  }

  onShrink(){
    this.wildState='shrunken';
  }
}
