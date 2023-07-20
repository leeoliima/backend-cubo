"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    constructor(first_name, last_name, participation) {
        this.first_name = first_name;
        this.last_name = last_name;
        this.participation = participation;
    }
    getFirstName() {
        return this.first_name;
    }
    setFirstName(firstName) {
        this.first_name = firstName;
    }
    getLastName() {
        return this.last_name;
    }
    setLastName(lastName) {
        this.last_name = lastName;
    }
    getParticipation() {
        return this.participation;
    }
    setParticipation(participation) {
        this.participation = participation;
    }
}
exports.User = User;
