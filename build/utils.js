"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const enums_1 = require("./enums");
// TODO Controlamos el contrato de los datos que recibimos del cliente
const isString = (string) => {
    return typeof string === 'string' || string instanceof String;
};
const isDate = (date) => {
    return Boolean(Date.parse(date));
};
const isWeather = (param) => {
    return Object.values(enums_1.WeatherEnum).includes(param); //* Object.values() devuelve un array con los valores de un objeto
};
const isVisibility = (param) => {
    return Object.values(enums_1.VisibilityEnum).includes(param);
};
const parseComment = (commentFromRequest) => {
    if (!isString(commentFromRequest)) {
        throw new Error('Incorrect or missing comment');
    }
    return commentFromRequest.toLowerCase();
};
const parseDate = (dateFromRequest) => {
    if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
        throw new Error('Incorrect or missing date');
    }
    return dateFromRequest;
};
const parseWeather = (weatherFromRequest) => {
    if (!isWeather(weatherFromRequest) || !isString(weatherFromRequest)) {
        throw new Error('Incorrect or missing weather');
    }
    return weatherFromRequest.toLowerCase();
};
const parseVisibility = (visibilityFromRequest) => {
    if (!isVisibility(visibilityFromRequest) || !isString(visibilityFromRequest)) {
        throw new Error('Incorrect or missing visibility');
    }
    return visibilityFromRequest.toLowerCase();
};
const toNewDiaryEntry = (object) => {
    const newEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    };
    return newEntry;
};
exports.default = toNewDiaryEntry;
