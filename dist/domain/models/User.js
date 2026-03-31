"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, name, document, password, email, role, parking) {
        this.id = id;
        this.name = name;
        this.document = document;
        this.password = password;
        this.email = email;
        this.role = role;
        this.parking = parking;
    }
}
exports.User = User;
