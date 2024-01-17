import express from 'express' // ? ESModules
import * as diaryService from '../services/diary'
import toNewDiaryEntry from '../utils'
const router = express.Router()

router.get('/', (_req, res) => {
  res.send(diaryService.getEntriesWithoutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = diaryService.findById(+req.params.id)
  return (diary != null) ? res.send(diary) : res.sendStatus(404)
})

router.post('/', (req, res) => {
  // res.send('post diary') start msg
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = diaryService.addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e) {
    const error = e as Error
    res.status(400).send(error.message)
  }
})

export default router
