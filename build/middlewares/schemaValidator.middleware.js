"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schemaValidator = void 0;
const zod_1 = require("zod");
// TODO funcion que retorna otra funcion
const schemaValidator = (schema) => (req, res, next) => {
    // console.log('Middleware intersticial. Schema validator')
    try {
        schema.parse(req.body); // * Valida el body con el schema que hayamos pasado por parametro
        next();
    }
    catch (error) {
        if (error instanceof zod_1.ZodError) {
            // return res.status(500).json(error.issues.map((issue) => issue.message))
            return res
                .status(400)
                .json(error.issues.map((issue) => ({ message: issue.message })));
        }
        return res.status(400).json({ message: 'Internal Server error' });
    }
};
exports.schemaValidator = schemaValidator;
