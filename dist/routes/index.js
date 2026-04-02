"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const DependencyInjection_1 = require("../infraestructure/config/DependencyInjection");
// Routers
const user_routes_1 = require("./user.routes");
const parking_routes_1 = require("./parking.routes");
const plan_routes_1 = require("./plan.routes");
const role_routes_1 = require("./role.routes");
const subscription_routes_1 = require("./subscription.routes");
const auth_routes_1 = require("./auth.routes");
const client_routes_1 = require("./client.routes");
const vehicleType_routes_1 = require("./vehicleType.routes");
const vehicle_routes_1 = require("./vehicle.routes");
const ticket_routes_1 = require("./ticket.routes");
const router = (0, express_1.Router)();
// Health check
router.get('/health', (req, res) => {
    res.json({ status: 'OK', uptime: process.uptime() });
});
// Note: In a real app, DependencyInjection.init(dataSource) would be called in index.ts/app.ts
// For now, we'll provide the wired routers.
// Auth routes (Public)
router.use('/auth', (req, res, next) => (0, auth_routes_1.createAuthRouter)(DependencyInjection_1.DependencyInjection.getAuthController())(req, res, next));
// Domain routes
router.use('/user', (req, res, next) => (0, user_routes_1.createUserRouter)(DependencyInjection_1.DependencyInjection.getUserController())(req, res, next));
router.use('/parqueadero', (req, res, next) => (0, parking_routes_1.createParkingRouter)(DependencyInjection_1.DependencyInjection.getParkingController())(req, res, next));
router.use('/plan', (req, res, next) => (0, plan_routes_1.createPlanRouter)(DependencyInjection_1.DependencyInjection.getPlanController())(req, res, next));
router.use('/role', (req, res, next) => (0, role_routes_1.createRoleRouter)(DependencyInjection_1.DependencyInjection.getRoleController())(req, res, next));
router.use('/subscription', (req, res, next) => (0, subscription_routes_1.createSubscriptionRouter)(DependencyInjection_1.DependencyInjection.getSubscriptionController())(req, res, next));
router.use('/client', (req, res, next) => (0, client_routes_1.createClientRouter)(DependencyInjection_1.DependencyInjection.getClientController())(req, res, next));
router.use('/vehicle-type', (req, res, next) => (0, vehicleType_routes_1.createVehicleTypeRouter)(DependencyInjection_1.DependencyInjection.getVehicleTypeController())(req, res, next));
router.use('/vehicle', (req, res, next) => (0, vehicle_routes_1.createVehicleRouter)(DependencyInjection_1.DependencyInjection.getVehicleController())(req, res, next));
router.use('/ticket', (req, res, next) => (0, ticket_routes_1.createTicketRouter)(DependencyInjection_1.DependencyInjection.getTicketController())(req, res, next));
exports.default = router;
