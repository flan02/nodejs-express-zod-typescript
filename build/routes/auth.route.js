"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const auth_controller_1 = require("../controllers/auth.controller");
const schemaValidator_middleware_1 = require("../middlewares/schemaValidator.middleware");
const auth_schema_1 = require("../schemas/auth.schema");
const router = (0, express_1.Router)();
router.post('/api/v1/login', (0, schemaValidator_middleware_1.schemaValidator)(auth_schema_1.authSchema), auth_controller_1.login);
exports.default = router;
