
class Square {
  constructor(side) {
    this.side = side;
  }
}

class Rectangle {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
}

class Circle {
  constructor(radius) {
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure){
    switch(figure.constructor.name){
    case 'Square':
      return Math.pow(figure.side,2)
    case 'Rectangle':
      return figure.width*figure.height;
    case 'Circle':
      return Math.round(Math.PI*Math.pow(figure.radius,2)*100)/100;
    }
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));
