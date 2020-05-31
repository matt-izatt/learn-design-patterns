import {Component} from '@angular/core';
import {Singleton} from "./singleton";

@Component({
  selector: 'app-singleton',
  templateUrl: './singleton.component.html',
  styleUrls: ['./singleton.component.scss']
})
export class SingletonComponent {

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

  newSingletonInstance() {
    this.instanceList.push(Singleton.getInstance())
  }

  checkSingletonInstances() {
    this.checkedInstances = [];
    let i: number;
    for (i = 0; i < this.instanceList.length; i++) {
      this.checkedInstances.push(`Instance ${i} id: ${this.instanceList[i].getId()}`)
    }
  }

}
