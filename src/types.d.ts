// TODO express busca por defecto este archivo para leer los TIPOS creados con typescript

export type Weather = 'sunny' | 'rainy' | 'cloudy' | 'windy' | 'stormy'
export type Visibility = 'great' | 'good' | 'ok' | 'poor'

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
interface SpecialDiaryEntry extends DiaryEntry {
  flight: number
}

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
