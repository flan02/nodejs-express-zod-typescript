import { NewDiaryEntry, Visibility, Weather } from './types'
import { VisibilityEnum, WeatherEnum } from './enums'

// TODO Controlamos el contrato de los datos que recibimos del cliente

const isString = (string: any): boolean => {
  return typeof string === 'string' || string instanceof String
}

const isDate = (date: string): boolean => {
  return Boolean(Date.parse(date))
}

const isWeather = (param: any): boolean => {
  return Object.values(WeatherEnum).includes(param) //* Object.values() devuelve un array con los valores de un objeto
}

const isVisibility = (param: any): boolean => {
  return Object.values(VisibilityEnum).includes(param)
}

const parseComment = (commentFromRequest: any): string => {
  if (!isString(commentFromRequest)) {
    throw new Error('Incorrect or missing comment')
  }
  return commentFromRequest.toLowerCase()
}

const parseDate = (dateFromRequest: any): string => {
  if (!isString(dateFromRequest) || !isDate(dateFromRequest)) {
    throw new Error('Incorrect or missing date')
  }
  return dateFromRequest
}

const parseWeather = (weatherFromRequest: any): Weather => {
  if (!isWeather(weatherFromRequest) || !isString(weatherFromRequest)) {
    throw new Error('Incorrect or missing weather')
  }
  return weatherFromRequest
}

const parseVisibility = (visibilityFromRequest: any): Visibility => {
  if (!isVisibility(visibilityFromRequest) || !isString(visibilityFromRequest)) {
    throw new Error('Incorrect or missing visibility')
  }
  return visibilityFromRequest
}

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
  const newEntry: NewDiaryEntry = {
    comment: parseComment(object.comment),
    date: parseDate(object.date),
    weather: parseWeather(object.weather),
    visibility: parseVisibility(object.visibility)
  }
  return newEntry
}

export default toNewDiaryEntry
