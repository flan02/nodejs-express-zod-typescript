import { NextFunction, Request, Response } from 'express'
import { AnyZodObject, ZodError } from 'zod'

// TODO funcion que retorna otra funcion
export const schemaValidator = (schema: AnyZodObject) => (req: Request, res: Response, next: NextFunction): any => {
  // console.log('Middleware intersticial. Schema validator')
  try {
    schema.parse({
      body: req.body,
      params: req.params,
      query: req.query
      // header: req.headers
    }) // * Valida el body, params, query con el schema que hayamos pasado por parametro
    next()
  } catch (error) {
    console.log(error)
    if (error instanceof ZodError) {
      // return res.status(500).json(error.issues.map((issue) => issue.message))
      return res
        .status(400)
        .json(error.issues.map((issue) => ({
          path: issue.path,
          message: issue.message
        })))
    }
    return res.status(400).json({ message: 'Internal Server error' })
  }
}
