//DATA TYPES & COERCION
let name = "Leanne"
let age = 20
let isMarried = "false"
let height = "1.46 m"
let nameAndAge = name + age
let sum = age + 2024
let product = age * 2024

console.log (name)
console.log (age)
console.log (isMarried)
console.log (height)
console.log (nameAndAge)
console.log (sum)
console.log (product)

 //FUNCTIONS 

 //helloWorld
function helloWorld() {
    return "Hello World"
}
let function1 = helloWorld()
console.log (function1)

//add
function add(l, s){
    return l + s 
}
let function2 = add(11, 4)
console.log (function2)

//multiply
function multiply(m, o){
    return m + o
}
let function3 = multiply(20, 5)
console.log (function3)

//greet
function greet(name) {
    return "Hello " + name + "!";
}
let greeting = greet("Leanne");
console.log(greeting); 

// and
function and(arg1, arg2) {
    return arg1 && arg2
}
let resultAnd = and(true, false)
console.log(resultAnd)

// or
function or(arg1, arg2) {
    return arg1 || arg2
}
let resultOr = or(true, false)
console.log(resultOr)

//not
function not(arg) {
    return !arg;
}
let resultNot = not(false);
console.log(resultNot); 
 