import {Component, OnInit} from '@angular/core';
import {Singleton} from "./singleton";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent implements OnInit {

  instanceList: Singleton[] = [];
  checkedInstances: string[] = [];

  code = `
  export class Singleton {
    private static instance: Singleton;
    private static id: number

    private constructor() {
      Singleton.id = Date.now()
    }

    public static getInstance(): Singleton {
      if (!Singleton.instance) {
        Singleton.instance = new Singleton();
      }

      return Singleton.instance;
    }

    public getId(): number {
      return Singleton.id;
    }
  }
  `


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
      this.checkedInstances.push(`Instance ${i} id: ${this.instanceList[i].getId()}`)
      console.log(`Instance ${i} id: ${this.instanceList[i].getId()}`)
    }
    console.log(this.checkedInstances);
  }

}
