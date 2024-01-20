import { Request, Response } from 'express'

export const login = (_req: Request, res: Response): Response => {
  // console.log(req.body)
  try {
    //* throw new Error('Error de prueba')
    // console.log(req.body)
    res.send('Login success')
    return res.status(200).json({ message: 'Login success' })
  } catch (error) {
    return res.status(500).json({ message: 'Internal server error' })
  }
}
