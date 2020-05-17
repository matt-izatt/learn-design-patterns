import {Component, OnInit} from '@angular/core';
import {Singleton} from "./singleton";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {

  instanceList: Singleton[] = [];


  constructor() { }

  ngOnInit(): void {
  }

  newSingletonInstance() {
    const instanceNumber = this.instanceList.length;
    this.instanceList.push(Singleton.getInstance())
    console.log(`Created instance ${instanceNumber}`);
  }

  checkSingletonInstances() {
    let i: number;
    for (i = 0; i < this.instanceList.length; i++) {
      console.log(`Instance ${i} id: ${this.instanceList[i].getId()}`)
    }
  }

}
