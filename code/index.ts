let a = 10;
console.log(a)

function add(num1:number, num2:number){
    return num1 + num2
}

let result = add("5",8)
console.log(result)


Alias type
type Users={
    firstName:string
    age: number
}

const User: Users = {
    firstName: "Rhyan",
    age: 21
}
console.log(User)

// Union type
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


Literal type
let productPrice: 10 | 20 | 30
let productName: "Apple" | "Motorola" | "Samsung"

productPrice = 30
productName = "Apple"

console.log(productName + " = " + productPrice)


Intersection
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