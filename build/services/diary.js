"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDiary = exports.findById = exports.getEntriesWithoutSensitiveInfo = exports.getEntries = void 0;
const diaries_json_1 = __importDefault(require("./diaries.json"));
const diaries = diaries_json_1.default;
const getEntries = () => diaries;
exports.getEntries = getEntries;
// TODO typescript no puede inferir el tipo de dato de retorno a los usuarios, por lo que se lo debemos indicar nosotros
const getEntriesWithoutSensitiveInfo = () => {
    return diaries.map(({ id, date, weather, visibility }) => ({
        id,
        date,
        weather,
        visibility
    }));
};
exports.getEntriesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo;
const findById = (id) => {
    const entry = diaries.find((d) => d.id === id);
    if (entry != null) {
        const { comment } = entry, rest = __rest(entry, ["comment"]);
        return rest;
    }
    return undefined; // ! Se puede omitir el undefined desde la configuracion de tsconfig.json ("noImplicitReturns": true) -> cambiar a false
};
exports.findById = findById;
const addDiary = (newDiaryEntry) => {
    const newDiary = Object.assign({ id: Math.max(...diaries.map((d) => d.id)) + 1 }, newDiaryEntry);
    diaries.push(newDiary);
    return newDiary;
};
exports.addDiary = addDiary;
// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
