import { Component } from "./Component";

export class Leaf extends Component {
  private price: number;

  constructor(name: string, price: number) {
    super(name);
    this.name = name;
    this.price = price;
  }
  public getPrice(): number {
    return this.price;
  }
}
