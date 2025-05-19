// String Prototype add reverse
String.prototype.reverse = function(){
    return this.split("").reverse().join("")
}
const name = "Fazle Hasan"
console.log(name.reverse())

// Array Prototype add sum
Array.prototype.sum = function(){
    return this.reduce((acc,el)=>acc + el,0)
}
const numbers = [1,2,3,4,5]
console.log(numbers.sum())
// Array Prototype add even
Array.prototype.filterEven = function(){
    return this.filter((el)=>el%2 === 0)
}
const evenNumber = [1,2,3,4,5]
console.log(evenNumber.filterEven())