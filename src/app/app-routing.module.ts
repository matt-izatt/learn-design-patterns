import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreationalComponent} from "./pages/creational/creational.component";
import {SingletonComponent} from "./pages/creational/singleton/singleton.component";
import {StructuralComponent} from "./pages/structural/structural.component";
import {BehaviouralComponent} from "./pages/behavioural/behavioural.component";
import {NotFoundComponent} from "./ui-components/not-found/not-found.component";

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
