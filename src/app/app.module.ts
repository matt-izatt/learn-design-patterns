import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from "./pages/home/home.component";
import {SideBarComponent} from "./ui-components/side-bar/side-bar.component";
import {TopBarComponent} from "./ui-components/top-bar/top-bar.component";
import {CreationalComponent} from './pages/creational/creational.component';
import {SingletonComponent} from './pages/creational/singleton/singleton.component';
import {StructuralComponent} from './pages/structural/structural.component';
import {BehaviouralComponent} from './pages/behavioural/behavioural.component';
import {NotFoundComponent} from './ui-components/not-found/not-found.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    SideBarComponent,
    HomeComponent,
    CreationalComponent,
    SingletonComponent,
    StructuralComponent,
    BehaviouralComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
