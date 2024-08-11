let a = 10;
console.log(a)

function add(num1:number, num2:number){
    return num1 + num2
}

let result = add("5",8)
console.log(result)


// // Alias type
type Users={
    firstName:string
    age: number
}

const User: Users = {
    firstName: "Rhyan",
    age: 21
}
console.log(User)

// // Union type
function userInput(input1:number | string, input2:number | string){
    let result
    if(typeof input1 === 'number' && typeof input2 === 'number'){
        
        result = input1 + input2
    }
    else{
        result = input1.toString() + input2.toString()
    }
    return result
}

const combinePrices = userInput(10, 20)
console.log(combinePrices)

const combineName = userInput("Apple", "Avocado")
console.log(combineName)


// Literal type
let productPrice: 10 | 20 | 30
let productName: "Apple" | "Motorola" | "Samsung"

productPrice = 30
productName = "Apple"

console.log(productName + " = " + productPrice)


// Intersection
type User = {
    firstName: string
    age: number
}

type JobRole={
    id: number
    role: string
}

type employee = User & JobRole
const user1: employee = {
    firstName: "Rhyan",
    age: 21,
    id: 25250,
    role: "Dev"
}

console.log(user1)

const admin = 1;
const read = 2;
const dev = 3;

enum Role {
  admin = 1, read = 2, dev = 3;
}

const user ={
  firstName : "Rhyan",
  age: 40,
  role: Role.dev
}

console.log(user)

function add(num1:number, num2:number):number{
  return num1 + num2
}

function result(price:number){
  console.log("The result is " + price)
}

result(add(6,3))

const user = {
  firstName: "Rhyan",
  age: 21
}

let itemInput: unknown;
let itemName: string;


itemInput = 10
itemInput = "Apple"
if(itemInput === "string"){
  itemName = itemInput;
}

function generateError(message: string, code: number):never{
  throw{
    message:message, errorCode:code
  }
}

console.log(generateError("The appication crashed", 500))

let item: [string, string, number, boolean] = ["Rhyan", "Dev", 21, true]
console.log(item)

}

enum Role{admin = 1, read = 2, dev = 3}
enum Car{gol = 1, fiesta = 2, corsa = 3}



const user ={
  firstName: "Rhyan",
  age: 21,
  role: Role.dev,
  car: Car.gol
}

console.log(user)

Day 3 - Exercise 1
let pi = 3.14159;
let tau = pi * 2;

console.log(`${tau} is ${pi} times two.`);


// Day 3 - Exercise 2
let pie:string 
pie = 'blueberry'

console.log(`I like to eat ${pie}-flavored pie.`)


// Day 3 - Exercise 3
let isRhyan: boolean = false;
console.log(`${isRhyan? "Oh, Hi Rhyan": "Who are you?"}`)


// Day 3 - Exercise 4
const integer:number = 6;
const float:number = 6.66;
const hex:number = 0xf00d;
const binary:number = 0b1010011010;
const octal:number = 0o744;
const negZero:number = -0;
const actuallyNumber:number= NaN;
const largestNumber:number = Number.MAX_VALUE;
const mostBiglyNumber:number = Infinity;

const members:number[] = [
  integer,
  float,
  hex,
  binary,
  octal,
  negZero,
  actuallyNumber,
  largestNumber,
  mostBiglyNumber];

members[0] = 12345;
console.log(members);


// Day 3 - Exercise 5
const sequence:number[] = Array.from(Array(10).keys());
const animals:string[] = ['pangolin', 'aardvark', 'echidna', 'binturong'];
const stringsAndNumbers:(number | string)[]= [1, 'one', 2, 'two', 3, 'threee'];
const allMyArrays:(number | string)[][] = [sequence, animals, stringsAndNumbers];

console.log(allMyArrays);
console.log('length: ' + allMyArrays.length+ '\n');

console.log('\n' + 'first array: ' + allMyArrays[2] + "\n");
console.log('first array: ' + allMyArrays[0]);

let teste1:number=10;
let teste2:number=10;

function teste() {
  if(teste1 === teste2){
    return 'teste1 and teste2 are equal'
  } else{
    return 'Error!'
  }
}
console.log(teste())