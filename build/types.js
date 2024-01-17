"use strict";
// TODO express busca por defecto este archivo para leer los TIPOS creados con typescript
// export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
// export type Visibility = 'great' | 'good' | 'ok' | 'poor'
Object.defineProperty(exports, "__esModule", { value: true });
exports.Visibility = exports.Weather = void 0;
var Weather;
(function (Weather) {
    Weather["Sunny"] = "sunny";
    Weather["Rainy"] = "rainy";
    Weather["Cloudy"] = "cloudy";
    Weather["Windy"] = "windy";
    Weather["Stormy"] = "stormy";
})(Weather || (exports.Weather = Weather = {}));
var Visibility;
(function (Visibility) {
    Visibility["Great"] = "great";
    Visibility["Good"] = "good";
    Visibility["Ok"] = "ok";
    Visibility["Poor"] = "poor";
    Visibility["Foggy"] = "foggy";
})(Visibility || (exports.Visibility = Visibility = {}));
//* ESTE ES UN TIPO DE DATO CONCRETO, REQUERIRA QUE SE CUMPLAN LAS PROPIEDADES
/*
export type DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility
    comment?: string;
}
*/
