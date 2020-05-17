import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SideBarService {

  sideBarOpen = new BehaviorSubject(false);

  constructor() { }
}
