"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const login = (_req, res) => {
    // console.log(req.body)
    try {
        //* throw new Error('Error de prueba')
        // console.log(req.body)
        res.send('Login success');
        return res.status(200).json({ message: 'Login success' });
    }
    catch (error) {
        return res.status(500).json({ message: 'Internal server error' });
    }
};
exports.login = login;
