"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(id, first_name, last_name, participation) {
        this.id = id;
        this.first_name = first_name;
        this.last_name = last_name;
        this.participation = participation;
    }
    getId() {
        return this.id;
    }
    firstName() {
        return this.first_name;
    }
    lastName() {
        return this.last_name;
    }
    participations() {
        return this.participation;
    }
}
exports.User = User;
