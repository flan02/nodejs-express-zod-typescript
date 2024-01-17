import { VisibilityEnum, WeatherEnum } from './enums'

// TODO express busca por defecto este archivo para leer los TIPOS de definiciones creados con typescript, sino contiene enums se puede llama "types.d.ts"
export type Weather = WeatherEnum.Sunny | WeatherEnum.Rainy | WeatherEnum.Cloudy | WeatherEnum.Windy | WeatherEnum.Stormy
export type Visibility = VisibilityEnum.Great | VisibilityEnum.Good | VisibilityEnum.Ok | VisibilityEnum.Poor | VisibilityEnum.Foggy
// TODO Estos enum los utiliza javascript para crear un objeto con los valores de las propiedades, entonces el fichero no puede llamarse "types.d.ts" porque no es un fichero de definicion de tipos, es un fichero de definicion de datos

//* ESTA PENSADA PARA SER EXTENDIBLE LA INTERFAZ A NUEVAS INTERFACES
export interface DiaryEntry {
  id: number
  date: string
  weather: Weather
  visibility: Visibility
  comment?: string
}

// * ESTA INTERFAZ HEREDA DE DiaryEntry y elimina el campo comment. Forma del [pick / commit]
export type NonSensitiveInfoDiaryEntry = Pick<DiaryEntry, 'id' | 'date' | 'weather' | 'visibility'>
export type NonSensitiveInfoDiaryEntry2 = Omit<DiaryEntry, 'comment'>
export type NewDiaryEntry = Omit<DiaryEntry, 'id'>

//* ESTA INTERFAZ HEREDA DE DiaryEntry y agregamos un nuevo campo
export interface SpecialDiaryEntry extends DiaryEntry {
  flight: number
}

// ? ESTE ES UN TIPO DE DATO CONCRETO, REQUERIRA QUE SE CUMPLAN LAS PROPIEDADES
/*
export type DiaryEntry {
    id: number;
    date: string;
    weather: Weather;
    visibility: Visibility
    comment?: string;
}
*/
