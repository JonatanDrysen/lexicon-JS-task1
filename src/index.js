// console.log("Hello World!")

// task 1:
const myAge = 21; console.log(`My age is ${myAge} years old!`);

// task 2: 
var manufacturer = "Mazda" // 'var' is optionally initialized and globally scoped
let model = "Miata"  // 'let' is optionally initialized and block-scoped
const modelYear = 1996 // 'const' needs to be initialized and cannot be reassigned using '=' and is also block-scoped
console.log(`my car is a ${manufacturer} ${model} from ${modelYear}.`)

// task 3:
const day = "wednesday"
const week = 2
let isItSaturday = false
console.log(`today is ${day}!`)
console.log(`it is currently week ${week}`)
console.log(`but is it saturday? ${isItSaturday}!`)

// task 4: 
const name = "jonatan"; console.log("my name is", name)
// const name = "drysen"; console.log("my name is", name)

/*
when using 'const', you can only initialize the variable once, which the name "constant" 
suggests. the value has to be constant and cannot be reassigned with the '=' operator like 
'let' or 'var'. this is useful because it employs the concept of immutability, which is 
important.
*/