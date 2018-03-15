import { Component ,trigger,state,style} from '@angular/core';
//import {state,style} from "@angular/animations";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations:[
    trigger('divState',[
      state('normal',style({
        backgroundColor:'red',
        transform:'translateX(0)'
      })),
      state('highlighted',style({
        backgroundColor:'lightblue',
        transform:'translateX(100px)'
      }))
    ])
  ]
})
export class AppComponent {
  state='normal';

}
