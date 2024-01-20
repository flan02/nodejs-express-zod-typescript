"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createProduct = void 0;
const createProduct = (_req, res) => {
    return res.status(201).json({ message: 'Product created' });
};
exports.createProduct = createProduct;
