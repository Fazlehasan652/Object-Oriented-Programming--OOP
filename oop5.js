// class Circle {
//   static PI = 3.14;
//   constructor(radius) {
//     this.radius = radius;
//   }
//   getArea() {
//     const area = Circle.PI * this.radius * this.radius;
//     return area;
//   }
// }

// const circle1 = new Circle(5);
// Circle.PI = 2; //{Circle.PI This Value Not Change so we can solve this Problem #private key }
// console.log(circle1.getArea());
// const circle2 = new Circle(10);
// console.log(circle2.getArea());
// const circle3 = new Circle(20);
// console.log(circle3.getArea());
// const circle4 = new Circle(30);
// console.log(circle4.getArea());
// const circle5 = new Circle(40);
// console.log(circle5.getArea());

class Circle {
//   static PI = 3.14;
   #PI = 3.14; // private 
  constructor(radius) {
    this.radius = radius;
  }
  getArea() {
    const area = this.#PI * this.radius * this.radius;
    return area;
  }
}

const circle1 = new Circle(5);
Circle.PI = 2; //{Circle.PI is private value so the Reselt  can not be Change}
// Circle.#PI = 2;
console.log(circle1.getArea());
const circle2 = new Circle(10);
console.log(circle2.getArea());
const circle3 = new Circle(20);
console.log(circle3.getArea());
const circle4 = new Circle(30);
console.log(circle4.getArea());
const circle5 = new Circle(40);
console.log(circle5.getArea());
