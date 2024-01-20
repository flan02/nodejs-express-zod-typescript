import { Router } from 'express'
import { createProduct, updateProduct } from '../controllers/products.controller'
import { schemaValidator } from '../middlewares/schemaValidator.middleware'
import { createProductSchema, updateProductSchema } from '../schemas/product.schema'

const router = Router()

// * Ejemplo de middleware intersticial
/*
router.post('/api/v1/products', (_req, _res, next): void => {
  console.log('Middleware intersticial')
  next()
}, createProduct)
*/

router.post('/api/v1/products', schemaValidator(createProductSchema), createProduct)
router.put('/api/v1/products/:id', schemaValidator(updateProductSchema), updateProduct)

export default router
