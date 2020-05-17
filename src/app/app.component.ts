import {Component, OnInit} from '@angular/core';
import {SideBarService} from "./side-bar.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'learn-design-patterns';
  sideBarOpen = false;

  constructor(private sideBarService: SideBarService) {
  }

  ngOnInit(): void {
    this.sideBarService.sideBarOpen.subscribe(sideBarOpen => {
      this.sideBarOpen = sideBarOpen;
    })
  }

}
