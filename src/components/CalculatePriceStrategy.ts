export interface CalculatePriceStrategy {
  calculatePrice(data: number[]): number;
}

export class SumPriceStrategy implements CalculatePriceStrategy {
  calculatePrice(data: number[]) {
    return data.reduce((s, v) => s + v, 0);
  }
}

export class MultiplyPriceStrategy implements CalculatePriceStrategy {
  calculatePrice(data: number[]) {
    return data.reduce((s, v) => s * v);
  }
}

export class DividePriceStrategy implements CalculatePriceStrategy {
  calculatePrice(data: number[]) {
    return data.reduce((s, v) => s / v);
  }
}
