"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const products_route_1 = __importDefault(require("./routes/products.route"));
const app = (0, express_1.default)();
const PORT = 5000;
app.use(express_1.default.json());
app.use(auth_route_1.default);
app.use(products_route_1.default);
app.listen(PORT);
console.log(`Server on port: http://localhost:${PORT}`);
