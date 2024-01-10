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

// task 5
/* 
after discussing this with my imaginary friend Carl, we concluded that a good case for 
using booleans is when dealing with conditionals rendering. for example, i want to execute 
one of two blocks of code which render different things depending on if a user is logged 
in or not. i can then use an 'isLoggedIn' booelean property in the user object to know 
which block to execute depending on if the value is 'true' or 'false'.
*/

// task 6:
/*
we should declare the variable with 'const', since we know the value won't be changed.
by making said variable immutable, we avoid problems where one might accidentally assign
a new data type to it, and therefore breaking the code. by declaring it with 'const' we 
get an immediate syntax error if we try to redeclare it, thus saving alot of time 
debugging if something like that happened with a mutable variable.
*/