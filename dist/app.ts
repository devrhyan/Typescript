// // INTERFACE
interface  Item{
    name: string
    price:number

    itemPurchased(message:string):void

}

let product1:Item

product1={
    name: "Apple",
    price: 2000,
    itemPurchased(message:string){
        console.log(message + ' ' + this.name)
    }
}

product1.itemPurchased("You just bought a ")


// DIA 5 - EXERCICIO 1
interface CardItem{
    id:number
    title:string
    variantId?:number

}
function addToCart(item: CardItem){
    console.log(`Adding "${item.title}" to cart.`)
}
addToCart({id: 1, title:'shoes'})



// DIA 5 - EXERCICIO 2
interface Person{
    name: string;
    age: number;
}

class Person implements Person{
    constructor(public name:string, age:number){
        this.name
        this.age
    }
}

let rhyan = new Person('Rhyan', 21);

console.log(`${rhyan.name} is ${rhyan.age} years old.`)



// DIA 5 - EXERCICIO 3
class MC{
    greet(event:string = 'party'):string{
        return `Welcome to the ${event}`;
    }
}

const mc = new MC();
console.log(mc.greet('show'));



// DIA 5 - EXERCICIO 4
class Employee{
    title:string;
    salary:number;
        constructor(title:string, salary:number){
            this.title = title;
            this.salary = salary;
    }
}

const employee = new Employee ("Developer", 10000);
console.log(`The new employee's titles is ${employee.title} and they earn $ ${employee.salary}.`)

CORREÇÃO
class Employee{
        constructor(public title:string, public salary:number){
    }
}

const employee = new Employee ("Developer", 10000);
console.log(`The new employee's titles is ${employee.title} and they earn $ ${employee.salary}.`)


// Day 5 - Exercise 5

interface UserSchema {
   readonly id: number
    name: string
}

class User implements UserSchema {
    constructor(public name: string, readonly id: number) {}
}

const user = new User('Dog', 1)

console.log(user.id)

user.name = 'Harold' // pode mudar
// user.id = 5 // nao pode mudar

console.log(`User:`, user)
