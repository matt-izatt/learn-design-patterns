import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {CreationalComponent} from "./creational/creational.component";
import {SingletonComponent} from "./creational/singleton/singleton.component";
import {StructuralComponent} from "./structural/structural.component";
import {BehaviouralComponent} from "./behavioural/behavioural.component";
import {NotFoundComponent} from "./not-found/not-found.component";

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
      },
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'structural',
    component: StructuralComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  },
  {
    path: 'behavioral',
    component: BehaviouralComponent,
    children: [
      {
        path: '**',
        component: NotFoundComponent
      }
    ]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
