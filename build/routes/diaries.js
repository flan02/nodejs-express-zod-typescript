"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express")); //? ESModules
const router = express_1.default.Router();
router.get('/', (_req, res) => {
    res.send('get all diaries');
});
router.post('/', (_req, res) => {
    res.send('post diary');
});
exports.default = router;
