import { Router } from 'express'
import { login } from '../controllers/auth.controller'

const router = Router()

router.post('/api/v1/login', login)

export default router
