import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./home/home.component";
import {SideBarComponent} from "./side-bar/side-bar.component";
import {TopBarComponent} from "./top-bar/top-bar.component";
import {CreationalComponent} from './creational/creational.component';
import {SingletonComponent} from './creational/singleton/singleton.component';
import {StructuralComponent} from './structural/structural.component';
import {BehaviouralComponent} from './behavioural/behavioural.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    HomeComponent,
    CreationalComponent,
    SingletonComponent,
    StructuralComponent,
    BehaviouralComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
