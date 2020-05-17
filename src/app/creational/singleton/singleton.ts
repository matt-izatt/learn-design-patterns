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



