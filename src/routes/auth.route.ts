import { Router } from 'express'
import { login } from '../controllers/auth.controller'
import { schemaValidator } from '../middlewares/schemaValidator.middleware'
import { authSchema } from '../schemas/auth.schema'

const router = Router()

router.post('/api/v1/login', schemaValidator(authSchema), login)

export default router
