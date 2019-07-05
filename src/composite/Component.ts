export interface PriceOwnerComponent {
  getPrice(): number;
}

export abstract class Component implements PriceOwnerComponent {
  name: string;
  parent!: Component;

  constructor(name: string) {
    this.name = name;
  }

  /**
   * setParent
   */
  public setParent(parent: Component) {
    this.parent = parent;
  }

  /**
   * getParent
   */
  public getParent(): Component {
    return this.parent;
  }

  /**
   * add
   */
  public add(component: Component): void {}

  /**
   * remove
   */
  public remove(component: Component): void {}

  /**
   * isComplete
   */
  public isComposite(): boolean {
    return false;
  }

  /**
   * getPrice
   */
  public abstract getPrice(): number;
}
