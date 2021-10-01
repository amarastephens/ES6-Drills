let fullName = "Amara Stephens"

let favMovie = (name = "Tommy Wiseaumovie", movie = "The Room") => console.log(`My name is ${name} and my favorite movie is ${movie}`)
let getFirstName = (fullName) => { return fullName.split(' ')[0] }
let getFirstNameConcise = fullName => fullName.split(' ')[0]

let doMath = (x, y) => ({
    exponent: x ^ y,
    product: x * y
})

let spreadFunction = (name, location, favFood) => {
console.log(`${name} ${location} ${favFood}`)
}
let arr = ["Amara", "Birmingham", "curry"];

let myName = "Amara"
function nextSpreadFunction (parameter) {
let string = [...parameter]
for (let i=0; i<parameter.length; i++) {
console.log(string[i])
}
}


favMovie("Amara", "The Blind Side");
favMovie();
console.log(getFirstName(fullName))
console.log(getFirstNameConcise(fullName))
let result = doMath(100, 2)
console.log(`The answer to the problem is ${(result.exponent)} and ${result.product}`)
spreadFunction (...arr)
nextSpreadFunction (myName)
