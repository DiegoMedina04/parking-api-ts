"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Plan = void 0;
class Plan {
    constructor(id, name, maxPlaces, monthlyValue, subscriptions) {
        this.id = id;
        this.name = name;
        this.maxPlaces = maxPlaces;
        this.monthlyValue = monthlyValue;
        this.subscriptions = subscriptions;
    }
}
exports.Plan = Plan;
