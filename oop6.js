// class Person {
//   set first_name(value){
//     this._first_name = value.toUpperCase()
//   }
//   get first_name(){
//     return this._first_name

//   }
//   set last_name(value){
//     this._last_name = value.toUpperCase()
//   }
//   get last_name(){
//    return  this._last_name
//   }
// getFullName(){
//     // return `${this.first_name} ${this.last_name}`
//     return this.first_name + " " + this.last_name
// }

// }

// const safa = new Person();
//  safa.first_name= "Amatulla"
//  safa.last_name ="Sabiha Safa"

// console.log(safa.getFullName());

class Person {
  setFirstName(value) {
    this.first_name = value.toUpperCase();
  }
  getFirstName() {
    return this.first_name;
  }
  setLastName(value) {
    this.last_name = value.toUpperCase();
  }
  getLastName() {
    return this.last_name;
  }
  getFullName() {
    return `${this.first_name} ${this.last_name}`;
    // return this.first_name + " " + this.last_name
  }
}

const safa = new Person();
safa.setFirstName("Amatulla");
safa.setLastName("Sabiha Safa");

console.log(safa.getFullName());
