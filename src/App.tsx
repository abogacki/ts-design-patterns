import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Composite, Leaf } from "./components/Composite";

const tree = new Composite("tree");
const branch1 = new Composite("branch1");
const branch2 = new Composite("branch2");
const simple = new Leaf("simple", 150);

branch1.add(new Leaf("leaf1", 10));
branch1.add(new Leaf("leaf2", 10));
branch1.add(simple);
branch2.add(new Leaf("leaf1", 10));
branch2.add(new Leaf("leaf2", 10));
branch2.add(new Leaf("leaf2", 10));
branch2.add(new Leaf("leaf2", 10));
branch2.add(new Leaf("leaf2", 10));

tree.add(branch1);
tree.add(branch2);

console.log(tree.getPrice());
console.log(branch1.getPrice());
console.log(simple.getPrice());

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
