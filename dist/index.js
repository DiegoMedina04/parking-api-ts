"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const app_1 = __importDefault(require("./app"));
const DatabaseConfig_1 = require("./infraestructure/config/DatabaseConfig");
const PORT = process.env.PORT || 8080;
DatabaseConfig_1.AppDataSource.initialize()
    .then(() => {
    console.log('[database]: Database connection established');
    app_1.default.listen(PORT, () => {
        console.log(`[server]: Server is running at http://localhost:${PORT}`);
    });
})
    .catch((error) => {
    console.error('[database]: Error connecting to database:', error);
});
