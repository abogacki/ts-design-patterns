import { CalculatePriceStrategy } from "../strategy/CalculatePriceStrategies";
import { Component } from "./Component";

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
    return this.strategy.calculatePrice(childrenPrices);
  }
}
