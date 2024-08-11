"use strict";
class Users {
    constructor(n, b) {
        this.name = n;
        this.balance = b;
    }
    addMoney(amount) {
        this.balance += amount;
    }
    takeMoney(remove) {
        this.balance -= remove;
    }
}
const user1 = new Users("Rhyan", 5000);
user1.addMoney(100);
user1.takeMoney(200);
const user2 = new Users("Marcos", 7000);
user2.addMoney(200);
user2.takeMoney(19);
console.log(user1, user2);
//# sourceMappingURL=bank.js.map