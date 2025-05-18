class Circle {
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    const area = Math.PI * this.radius * this.radius;
    return area;
  }
}

const circle1 = new Circle(5).getArea()
console.log(circle1)
const circle2 = new Circle(10)
console.log(circle2.getArea())
const circle3 = new Circle(20)
console.log(circle3.getArea())
const circle4 = new Circle(30)
console.log(circle4.getArea())
const circle5 = new Circle(40)
console.log(circle5.getArea())