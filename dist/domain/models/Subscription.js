"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Subscription = void 0;
class Subscription {
    constructor(id, parking, plan, startDate, endDate, status) {
        this.id = id;
        this.parking = parking;
        this.plan = plan;
        this.startDate = startDate;
        this.endDate = endDate;
        this.status = status;
    }
}
exports.Subscription = Subscription;
