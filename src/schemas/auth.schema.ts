import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().min(1, 'Che paragua bruto escribi bien').email('El email es incorrecto'),
  password: z.string().min(6, 'Che paragua mas de 6 letras escribi!').max(100)
})
