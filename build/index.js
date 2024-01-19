"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.post('/api/v1/login', (_req, res) => {
    res.send('Login');
});
const PORT = 5000;
app.listen(PORT);
console.log(`Server on port: http://localhost:${PORT}`);
