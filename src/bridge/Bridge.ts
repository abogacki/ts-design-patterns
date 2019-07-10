interface Shape {
  getArea(): number;
}

export class Circle implements Shape {
  radius: number;

  constructor(radius: number, color: Color) {
    this.radius = radius;
  }

  getArea(): number {
    return this.radius ** 2 * Math.PI;
  }
}

export class Rectangle implements Shape {
  a: number;
  b: number;
  color: Color;

  constructor(a: number, b: number, color: Color) {
    this.a = a;
    this.b = b;
    this.color = color;
  }

  getArea(): number {
    return this.a * this.b;
  }

  setColor(color: Color) {
    this.color = color;
  }
}

export class Color {
  public paint: string;

  constructor(paint: string) {
    this.paint = paint;
  }

  repaint() {
    this.paint = "red";
  }
}

export class MultiColor extends Color {
  public secondPaint: string;

  constructor(firstPaint: string, secondPaint: string) {
    super(firstPaint);
    this.secondPaint = secondPaint;
  }

  repaint() {
    this.paint = "red";
    this.secondPaint = "white";
  }
}
