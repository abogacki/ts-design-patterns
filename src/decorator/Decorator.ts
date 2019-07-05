import { Component } from "../composite/Component";

export class ComponentDecorator implements Component {
  name: string;
  component: Component;
  parent!: Component;
  constructor(component: Component) {
    this.component = component;
    this.name = component.name;
  }

  public setParent(parent: Component): void {
    this.component.setParent(parent);
  }
  public getParent(): Component {
    return this.component.getParent();
  }
  public add(component: Component): void {
    this.component.add(component);
  }
  public remove(component: Component): void {
    this.component.remove(component);
  }
  public isComposite(): boolean {
    return this.component.isComposite();
  }

  public getPrice(): number {
    return this.component.getPrice();
  }
}

export class Plus10PriceDecorator extends ComponentDecorator {
  public getPrice(): number {
    return super.getPrice() + 10;
  }
}

export class Minus10PriceDecorator extends ComponentDecorator {
  public getPrice(): number {
    return super.getPrice() - 10;
  }
}
