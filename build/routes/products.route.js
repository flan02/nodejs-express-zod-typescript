"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const products_controller_1 = require("../controllers/products.controller");
const schemaValidator_middleware_1 = require("../middlewares/schemaValidator.middleware");
const product_schema_1 = require("../schemas/product.schema");
const router = (0, express_1.Router)();
// * Ejemplo de middleware intersticial
/*
router.post('/api/v1/products', (_req, _res, next): void => {
  console.log('Middleware intersticial')
  next()
}, createProduct)
*/
router.post('/api/v1/products', (0, schemaValidator_middleware_1.schemaValidator)(product_schema_1.productSchema), products_controller_1.createProduct);
exports.default = router;
