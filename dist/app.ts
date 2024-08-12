// // INTERFACE
// interface  Item{
//     name: string
//     price:number

//     itemPurchased(message:string):void

// }

// let product1:Item

// product1={
//     name: "Apple",
//     price: 2000,
//     itemPurchased(message:string){
//         console.log(message + ' ' + this.name)
//     }
// }

// product1.itemPurchased("You just bought a ")


// DIA 5 - EXERCICIO 1
// interface CardItem{
//     id:number
//     title:string
//     variantId?:number

// }
// function addToCart(item: CardItem){
//     console.log(`Adding "${item.title}" to cart.`)
// }
// addToCart({id: 1, title:'shoes'})



// DIA 5 - EXERCICIO 2
// interface Person{
//     name: string;
//     age: number;
// }

// class Person implements Person{
//     constructor(public name:string, age:number){
//         this.name
//         this.age
//     }
// }

// let rhyan = new Person('Rhyan', 21);

// console.log(`${rhyan.name} is ${rhyan.age} years old.`)



// DIA 5 - EXERCICIO 3
// class MC{
//     greet(event:string = 'party'):string{
//         return `Welcome to the ${event}`;
//     }
// }

// const mc = new MC();
// console.log(mc.greet('show'));



// DIA 5 - EXERCICIO 4
// class Employee{
//     title:string;
//     salary:number;
//         constructor(title:string, salary:number){
//             this.title = title;
//             this.salary = salary;
//     }
// }

// const employee = new Employee ("Developer", 10000);
// console.log(`The new employee's titles is ${employee.title} and they earn $ ${employee.salary}.`)

// CORREÇÃO
// class Employee{
//         constructor(public title:string, public salary:number){
//     }
// }

// const employee = new Employee ("Developer", 10000);
// console.log(`The new employee's titles is ${employee.title} and they earn $ ${employee.salary}.`)


// Day 5 - Exercise 5

// interface UserSchema {
//    readonly id: number
//     name: string
// }

// class User implements UserSchema {
//     constructor(public name: string, readonly id: number) {}
// }

// const user = new User('Dog', 1)

// console.log(user.id)

//user.name = 'Harold'  pode mudar
// user.id = 5 // nao pode mudar

// console.log(`User:`, user)



// // READ 
// class Movies{
//     // readonly EU POSSO ACESSAR MAS NÃO POSSO ALTERAR 
//     readonly id:number
//     name:string

//     constructor(id: number, name:string){
//         this.id = id
//         this.name =name
//     }
// }

// // TSC -W

// let movie1 = new Movies(1, 'Dejavu')
// // movie1.id = 5
// console.log(movie1)



// PARAMETRO DO CONSTRUCTOR

// class Movies{
//     // "?" significa opcional
//     constructor(
//         public readonly id: number,
//         public name:string,
//         public _price?:number){
//     }
// }


// let movie1 = new Movies(1, 'Dejavu', 20)
// console.log(movie1)



// INDEX SIGNATURES

// class HotelRooms{
//     [roomNumber: string]:string
// }

// let room = new HotelRooms()

// // Property/Property data
// room.A201 = 'André'
// room.A202 = 'Ana'
// room.A17 = 'Rhyan'

// console.log(room)



// // INHERITANCE

// class Person{

//     // PROPERTY
//     constructor(public firstName:string, public lastName:string, public age:number){
//     }
//     // METHOD
//      greet(){
//         console.log('Hi')
//      }
// }


// // Cliente do banco
// class Clients extends Person{
//     balance(){
//         console.log('Your balance is 100$')
//     }
// }

// let client1 = new Clients('Rhyan','Andrade', 21)



// OVERRIDING

class Person{

    // PROPERTY
    constructor(public firstName:string, public lastName:string, public age:number){
    }
    // METHOD
     get greet(){
        return this.firstName + ' ' + this.lastName
     }
}


// Cliente do banco
class Clients extends Person{
    override get greet(){
        return 'Dear, ' + super.greet
     }
}

class Staff extends Person{
    override get greet(){
        return 'Hi, ' + super.greet
     }
}

let client1 = new Clients('Rhyan','Andrade', 21)
let staff1 = new Staff('Ana','Silva', 30)

console.log(client1.greet)
console.log(staff1.greet)