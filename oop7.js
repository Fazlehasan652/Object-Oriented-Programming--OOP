class Person {
  constructor(fName, lName, age) {
    this.first_Name = fName;
    this.last_Name = lName;
    if (age <= 0) {
      throw new Error("Age Must be grether then 0");
    }
    return this.age = age;
  }
  greet() {
    console.log(
      `Hello I am ${this.first_Name} ${this.last_Name}, and I am ${this.age} years old`
    );
  }

  getFullName() {
    return this.first_Name + " " + this.last_Name;
  }

  set age(value) {
    if (value <= 0) {
      throw new Error("Age Must be grether then 0");
    }
   return this._age = value;
  }
}
const safa = new Person("Amatulla", "Sabiha Safa", 5);

safa.greet();
// safa.age = 0; // This is Not Right
console.log(safa.getFullName());
