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

/**
 * The client code can work with any concrete factory class.
 */
console.log("Client: Testing client code with the first factory type...");
clientCode(new ConcreteFactory1());

console.log("");

console.log(
  "Client: Testing the same client code with the second factory type..."
);
clientCode(new ConcreteFactory2());

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
