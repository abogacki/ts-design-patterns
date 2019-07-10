import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Leaf } from "./composite/Leaf";
import { Composite } from "./composite/Composite";
import {
  SumPriceStrategy,
  MultiplyPriceStrategy,
  DividePriceStrategy
} from "./strategy/CalculatePriceStrategies";
import {
  Plus10PriceDecorator,
  Minus10PriceDecorator
} from "./decorator/Decorator";

import {
  clientCode,
  ConcreteFactory1,
  ConcreteFactory2
} from "./abstractFactory/AbstractFactory";

import { Circle, Color, MultiColor, Rectangle } from "./bridge/Bridge";

const branch1 = new Plus10PriceDecorator(
  new Composite("branch1", new SumPriceStrategy())
);

const decoratedLeaf = new Minus10PriceDecorator(new Leaf("graphics card", 10));
console.log(decoratedLeaf.getPrice());

branch1.add(new Leaf("leaf1", 10));
branch1.add(new Leaf("leaf2", 10));

const branch2 = new Composite("branch2", new SumPriceStrategy());
branch2.add(new Leaf("leaf1", 10));
branch2.add(new Leaf("leaf2", 20));

const branch3 = new Composite("branch3", new SumPriceStrategy());
branch3.add(new Leaf("leaf1", 20));
branch3.add(new Leaf("leaf2", 20));

const tree1 = new Composite("tree", new MultiplyPriceStrategy());
tree1.add(branch1);
tree1.add(branch2);

const tree2 = new Composite("tree", new MultiplyPriceStrategy());
tree2.add(branch1);
tree2.add(branch3);

const combinedTree = new Composite("combinedTree", new DividePriceStrategy());
combinedTree.add(tree1);
combinedTree.add(tree2);

const redColor = new Color("red");
const redBlueColor = new MultiColor("red", "blue");

const redRectangle = new Rectangle(3, 4, redColor);
const redBlueRectangle = new Rectangle(3, 4, redBlueColor);
const redCircle = new Circle(3, redColor);
const redBlueCircle = new Circle(3, redBlueColor);
redRectangle.color.repaint();
// console.log(redRectangle.color.paint);
console.log(redBlueRectangle.color);
console.log(redBlueRectangle.color.repaint());
console.log(redBlueRectangle.color);

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
};

export default App;
