import {Component, OnInit} from '@angular/core';
import {SideBarService} from "../side-bar.service";

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  sideBarOpen = false;

  constructor(private sideBarService: SideBarService) {
  }

  ngOnInit(): void {
  }

  toggleSideBar() {
    this.sideBarOpen = !this.sideBarOpen;
    this.sideBarService.sideBarOpen.next(this.sideBarOpen);
  }
}
