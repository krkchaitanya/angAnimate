import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {FormsModule} from "@angular/forms";
import {RouterModule, Routes} from "@angular/router";
import {HttpModule, Http} from "@angular/http";


import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListitemsComponent } from './listitems/listitems.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { IntroductionComponent } from './introduction/introduction.component'

const rootRoutes=[
  {path:"",component:IntroductionComponent},
  {path:"anganimations",component:MainComponent},
  {path:"listanimations",component:ListitemsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListitemsComponent,
    HeaderComponent,
    MainComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(rootRoutes),
    HttpModule,
    FormsModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
