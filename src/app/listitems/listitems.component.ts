import { 
  Component, 
  OnInit,
  trigger,
  style,
  state,
  transition,
  animate,
  keyframes
 } from '@angular/core';

@Component({
  selector: 'app-listitems',
  templateUrl: './listitems.component.html',
  styleUrls: ['./listitems.component.css'],
  animations:[
    trigger('liit', [
      state('normal',style({
        opacity:1,
        transform:'translateX(0)'
      })),
      transition('void => *',[
        style({
          opacity:0,
          transform:'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(300,style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ])
  ]
})

export class ListitemsComponent implements OnInit {

  items:any[]=[
    "oneone",
    "twotwo"
  ];

  names:any[]=[
    "personone",
    "persontwo"
  ];

  constructor() { }

  ngOnInit() {
  }


  onPushingItem(ite){
    this.items.push(ite.value);
    
    
  }

  onDel(ele){
    this.items.splice(this.items.indexOf(ele),1);
    
  }

}
