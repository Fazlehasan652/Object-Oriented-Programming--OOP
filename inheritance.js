class Animal{
    constructor(name){
        this.name = name
       
    }
    speak(){
        console.log(`${this.name} make a noice.`)
    }
    
}
class Dog extends Animal {
        speak() {
            console.log(`${this.name} make a bark.`)
        }
        run() {
            console.log(`${this.name} runs.`)
        }
    }
class Cat extends Animal {
        speak() {
            console.log(`${this.name} make a meows.`)
        }
        sleep() {
            console.log(`${this.name} Sleeps.`)
        }
    }
const tommy = new Dog("Tommy")
tommy.speak()
tommy.run()
const jelly = new Cat("Jelly")
jelly.speak()
jelly.sleep()