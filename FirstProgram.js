let fruit = ["apple","orange"]                                       // 2000

let newFruit =  fruit              // deep copy                      // 2000

newFruit[0] = null;

console.log(fruit)
console.log(newFruit)