"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
const routes_1 = __importDefault(require("./routes"));
const swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
const SwaggerConfig_1 = require("./infraestructure/config/SwaggerConfig");
const GlobalExceptionHandler_1 = require("./infraestructure/middleware/GlobalExceptionHandler");
dotenv_1.default.config();
const app = (0, express_1.default)();
// Middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// Routes
app.use('/api', routes_1.default);
// Swagger Documentation
app.use('/api-docs', swagger_ui_express_1.default.serve, swagger_ui_express_1.default.setup(SwaggerConfig_1.swaggerSpec));
// Root route
app.get('/', (req, res) => {
    res.send('Parking API is running...');
});
// Global Error Handler
app.use(GlobalExceptionHandler_1.globalExceptionHandler);
exports.default = app;
