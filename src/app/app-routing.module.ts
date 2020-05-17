import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreationalComponent} from "./creational/creational.component";
import {SingletonComponent} from "./creational/singleton/singleton.component";
import {StructuralComponent} from "./structural/structural.component";
import {BehaviouralComponent} from "./behavioural/behavioural.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'creational',
    component: CreationalComponent,
    children: [
      {
        path: '',
        redirectTo: 'singleton',
        pathMatch: 'full'
      },
      {
        path: 'singleton',
        component: SingletonComponent
      }
    ]
  },
  {
    path: 'structural',
    component: StructuralComponent,
  },
  {
    path: 'behavioural',
    component: BehaviouralComponent,
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
