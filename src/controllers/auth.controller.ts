import { loginSchema } from '../schemas/auth.schema'
import { ZodError } from 'zod'
import { Request, Response } from 'express'

export const login = (req: Request, res: Response): Response => {
  // console.log(req.body)
  try {
    //* throw new Error('Error de prueba')
    const response = loginSchema.parse(req.body)
    // console.log(response)
    res.send(response)
    return res.status(200).json({ message: 'Login success' })
  } catch (error: ZodError | any) {
    // console.error(error)
    if (error instanceof ZodError) {
      // return res.status(500).json(error.issues.map((issue) => issue.message))
      return res.status(400).json(error.issues.map((issue) => ({ message: issue.message })))
    }
    return res.status(500).json({ message: 'Internal server error' })
  }
}
