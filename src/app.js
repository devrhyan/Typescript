"use strict";
class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }
    get greet() {
        return this.firstName + ' ' + this.lastName;
    }
}
class Clients extends Person {
    get greet() {
        return 'Dear, ' + super.greet;
    }
}
class Staff extends Person {
    get greet() {
        return 'Hi, ' + super.greet;
    }
}
let client1 = new Clients('Rhyan', 'Andrade', 21);
let staff1 = new Staff('Ana', 'Silva', 30);
console.log(client1.greet);
console.log(staff1.greet);
//# sourceMappingURL=app.js.map