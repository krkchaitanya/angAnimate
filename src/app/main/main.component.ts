import { 
  Component, 
  OnInit , 
  trigger, 
  state, 
  style, 
  animate,
  transition
} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
  animations:[
    trigger('divState',[
      state('normal',style({
        backgroundColor:'lightgreen',
        transform:'translateX(0)'
      })),
      state('highlighted',style({
        backgroundColor:'lightblue',
        transform:'translateX(200px)'
      })),
      transition('normal <=> highlighted',animate(600))
      // transition('highlighted => normal', animate(800))
    ]),

    trigger('wildState',[
      state('normal', style({
        'background-color': 'red',
        transform: 'translateX(0) scale(1)'
      })),
      state('highlighted', style({
        'background-color': 'blue',
        transform: 'translateX(200px) scale(1)'
      })),
      state('shrunken', style({
        'background-color': 'green',
        transform: 'translateX(0) scale(0.5)'
      })),  
      transition('normal => highlighted',animate(600)),
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
export class MainComponent {
  
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
