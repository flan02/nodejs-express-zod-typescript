import express from 'express'
import authRoutes from './routes/auth.routes'

const app = express()
const PORT = 5000
app.use(express.json())
app.use(authRoutes)
app.listen(PORT)
console.log(`Server on port: http://localhost:${PORT}`)
