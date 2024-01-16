"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addEntry = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
//! EVITAR USAR LA EXCEPCION DE TIPOS, TRATAR SIEMPRE DE CONTROLAR
//! Excepcion de tipos de datos nos sirve para decirle a typescript que no se preocupe por el tipo de dato y que lo tome como un tipo de dato generico
//TODO Esto nos sirve en los casos que consumimos un .json o una API externa
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
const addEntry = () => null;
exports.addEntry = addEntry;
