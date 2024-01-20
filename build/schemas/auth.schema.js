"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authSchema = void 0;
const zod_1 = require("zod");
exports.authSchema = zod_1.z.object({
    email: zod_1.z.string().min(1, 'Che paragua bruto escribi bien').email('El email es incorrecto'),
    password: zod_1.z.string().min(6, 'Che paragua mas de 6 letras escribi!').max(100)
});
