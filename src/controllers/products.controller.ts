import { Request, Response } from 'express'
import { CreateProductBodyType, UpdateProductBodyType, UpdateProductParamsType, UpdateProductQueryType } from '../schemas/product.schema'

// * Request<Params, ResponseBody, RequestBody, Query>
export const createProduct = (req: Request<unknown, unknown, CreateProductBodyType, unknown>, res: Response): Response => {
  const { name, price, description } = req.body
  console.log(name, price, description)
  return res.send('Creating product...')
  // console.log(req.body.name, req.body.price, req.body.description) // ? Gracias al tipo exportado de Zod podemos acceder a los campos del body
  // return res.status(201).json({ message: 'Product created' })
}

// * Request<Params, ResponseBody, RequestBody, Query>
export const updateProduct = (req: Request<UpdateProductParamsType, unknown, UpdateProductBodyType, UpdateProductQueryType>, res: Response): Response => {
  const { id } = req.params
  const { name, price, description } = req.body
  const { title } = req.query
  console.log(id, name, price, description, title)
  // console.log(req.params.id)
  // console.log(req.body, req.params, req.query)
  return res.send('Updating product...')
}
