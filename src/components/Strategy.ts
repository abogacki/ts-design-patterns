export class Context {
  /**
   * @type {Strategy} The context maintains a reference to one of the Strategy objects.
   * The Context does not know the concrete class of a strategy.
   * It should work with all strategies via the Strategy interface
   *
   */
  private strategy: Strategy;
  constructor(strategy: Strategy) {
    this.strategy = strategy;
  }

  public setStrategy(strategy: Strategy) {
    this.strategy = strategy;
  }

  public doSomeBusinessLogic(): void {
    console.log(
      "Context: Sorting data using the strategy (not shure how it'll do it"
    );
    const result = this.strategy.doAlgorithm(["a", "b", "c", "d", "e"]);
    console.log(result.join(","));
  }
}

interface Strategy {
  doAlgorithm(data: string[]): string[];
}

export class ConcreteStrategyA implements Strategy {
  /**
   * doAlgorithm
   */
  public doAlgorithm(data: string[]): string[] {
    return data.sort();
  }
}

export class ConcreteStrategyB implements Strategy {
  /**
   * doAlgorithm
   */
  public doAlgorithm(data: string[]): string[] {
    return data.reverse();
  }
}

export class ConcreteStrategyC implements Strategy {
  /**
   * doAlgorithm
   */
  public doAlgorithm(data: string[]): string[] {
    return data.sort(() => Math.random() - 0.5);
  }
}
