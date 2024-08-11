"use strict";
class User {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}
const user = new User('Dog', 1);
console.log(user.id);
user.name = 'Harold';
console.log(`User:`, user);
//# sourceMappingURL=app.js.map