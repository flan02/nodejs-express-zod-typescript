import express from 'express'
import authRoutes from './routes/auth.route'
import productRoutes from './routes/products.route'

const app = express()
const PORT = 5000
app.use(express.json())
app.use(authRoutes)
app.use(productRoutes)
app.listen(PORT)
console.log(`Server on port: http://localhost:${PORT}`)
