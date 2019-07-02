import { CalculatePriceStrategy } from "./CalculatePriceStrategy";

export abstract class Component {
  name: string;
  price!: number;
  protected parent!: Component;

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

export class Leaf extends Component {
  price: number;

  constructor(name: string, price: number) {
    super(name);
    this.name = name;
    this.price = price;
  }
  public getPrice(): number {
    return this.price;
  }
}

export class Composite extends Component {
  protected children: Component[] = [];
  private strategy: CalculatePriceStrategy;

  constructor(name: string, strategy: CalculatePriceStrategy) {
    super(name);
    this.strategy = strategy;
  }

  /**
   * add
   */
  public add(component: Component): void {
    this.children.push(component);
    component.setParent(this);
  }

  /**
   * remove
   */
  public remove(component: Component): void {
    const componentIndex = this.children.indexOf(component);
    this.children.splice(componentIndex, 1);
  }

  /**
   * isComposite
   */
  public isComposite(): boolean {
    return true;
  }

  /**
   *
   * setStrategy
   */
  setStrategy(strategy: CalculatePriceStrategy): void {
    this.strategy = strategy;
  }

  /**
   * getPrice
   */
  public getPrice(): number {
    const childrenPrices = this.children.map(c => c.getPrice());
    console.log(childrenPrices);
    console.log(this.children);

    return this.strategy.calculatePrice(childrenPrices);
  }
}
