

class Person {
    static title = "Md."
    constructor(fName,lName){
        this.f_Name= fName
        this.l_Name= lName
    }
  getFullName(){
    // const result = Person.title + " " + this.f_Name + " " + this.l_Name
    // return result
         return (`${Person.title}${this.f_Name} ${this.l_Name} `)
    }
}



const fazle = new Person("Fazle", "Hasan")
console.log(fazle.getFullName())