import { DiaryEntry, NewDiaryEntry, NonSensitiveInfoDiaryEntry } from '../types'
import diaryData from './diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]
export const getEntries = (): DiaryEntry[] => diaries

// TODO typescript no puede inferir el tipo de dato de retorno a los usuarios, por lo que se lo debemos indicar nosotros
export const getEntriesWithoutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
  return diaries.map(({ id, date, weather, visibility }) => ({
    id,
    date,
    weather,
    visibility
  }))
}

export const findById = (id: number): DiaryEntry | undefined => {
  const entry = diaries.find((d) => d.id === id)
  if (entry != null) {
    const { comment, ...rest } = entry
    return rest
  }
  return undefined // ! Se puede omitir el undefined desde la configuracion de tsconfig.json ("noImplicitReturns": true) -> cambiar a false
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
  const newDiary = {
    id: Math.max(...diaries.map((d) => d.id)) + 1, //* Del id mas alto le sumamos uno
    ...newDiaryEntry
  }
  diaries.push(newDiary)
  return newDiary
}

// const diariesWithoutSensitiveInfo = getEntriesWithoutSensitiveInfo()
