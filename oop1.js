// class Person {
//   constructor(fName, lName) {
//     this.f_Name = fName;
//     this.l_Name = lName;
//   }
//   getFullName() {
//     return this.f_Name + " " + this.l_Name;
//   }
// }
// const safa = new Person("Amatulla", "Sabiha Safa");
// console.log(safa.getFullName());


class Person {
  constructor(fName, lName) {
    this.f_Name = fName;
    this.l_Name = lName;
  }
  getFullName() {
    return (`${this.f_Name} ${this.l_Name}`);
  }
}
const safa = new Person("Amatulla", "Sabiha Safa");
const saba = new Person("Adua", "Safiys Saba");
const suraiya = new Person("Suraiya", "Jahan");
const shela = new Person("Sabrina", "Akter Shela");
console.log(safa.getFullName());
console.log(saba.getFullName());
console.log(suraiya.getFullName());
console.log(shela.getFullName());
