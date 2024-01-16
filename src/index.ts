import express from 'express' // ? ESModules
// const express = require('express'); //? CommonJS
import diaryRouter from './routes/diaries'

const app = express()
app.use(express.json()) // middleware qe transforma la req.body a un json

const PORT = 5000

app.get('/ping', (_req, res) => {
  console.log(`Someone pinged here at ${new Date().toLocaleDateString()}`)
  res.send('ping')
})

app.use('/api/diaries', diaryRouter)

app.listen(PORT, () => {
  console.log(`Server running on port localhost:${PORT}`)
})
