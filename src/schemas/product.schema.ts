import { z } from 'zod'

export const createProductSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number().nonnegative(),
    description: z.string().optional()
  })
})

export const updateProductSchema = z.object({
  body: z.object({
    name: z.string(),
    price: z.number().nonnegative().optional(),
    description: z.string().optional()
  }),
  params: z.object({
    id: z.string().min(2, 'id must contain at least 2 characters') // .uuid('El id no es un uuid')
  }),
  query: z.object({
    title: z.string() // * ?title=algo
  })
})

export type CreateProductType = z.infer<typeof createProductSchema> // * Extraigo todas las propiedades del schema
export type CreateProductBodyType = z.infer<typeof createProductSchema>['body'] // * Extraigo solo las propiedades del body

export type UpdateProductType = z.infer<typeof updateProductSchema> // * Extraigo body, params, query en conjunto
export type UpdateProductBodyType = z.infer<typeof updateProductSchema>['body']
export type UpdateProductParamsType = z.infer<typeof updateProductSchema>['params']
export type UpdateProductQueryType = z.infer<typeof updateProductSchema>['query']
