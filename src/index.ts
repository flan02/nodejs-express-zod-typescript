/* eslint-disable @typescript-eslint/no-unused-vars */
import { z } from 'zod'

// * Zod Basics
// TODO definimos lo que esperamos desde el cliente
/*
const schema2 = z.string()
const numberSchema = z.number()
const booleanSchema = z.boolean()
const undefinedSchema = z.undefined()
const nullSchema = z.null()

TODO ejemplo de un dato random que nos envia el cliente
const name = 100
schema.parse(name) //! Si hay error zod lanza un throw exception

const name2 = 'Ryan Ray'
const res = schema2.parse(name2)
const res2 = numberSchema.parse(100)

console.log(res)
console.log(res2)

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
  isPremium: z.boolean(),
  email: z.string().email(),
  domain: z.string().url()
})

const res = userSchema.parse({
  name: 'Dan Chanivet',
  age: 35,
  isPremium: true,
  email: 'chanivetdan@hotmail.com',
  domain: 'https://www.chanivetdan.tech'
})

console.log(res)
*/

// * ZOD TYPE INFERENCE
/*
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number()
})

type UserType = z.infer<typeof userSchema>

! Gracias a la inferencia de tipos de zod no tenemos que repetir el tipo de dato
const userInput: { name: string, email: string, phone: number } = {
  name: 'Dan Chanivet',
  email: 'chanivetdan@hotmail.com',
  phone: 1124821510
}

 ? Zod Type Inference with TypeScript Generics
const userInput: UserType = {
  name: 'Dan Chanivet',
  email: 'chanivetdan@hotmail.com',
  phone: 1124821510
}

console.log(userInput)
*/

// * ZOD SCHEMA COMPOSITION
/*
const userSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.number()
})
const addressSchema = z.object({
  street: z.string(),
  city: z.string(),
  state: z.string(),
  postalCode: z.string()
})
*/
/*
const res = addressSchema.parse({
  street: '123 Fake St',
  city: 'Springfield',
  state: 'XX',
  postalCode: '12345'
})
*/
/*
// ? Combinamos los dos esquemas, es decir que tenemos las propiedades de ambos en un solo objeto
const citizenSchema = userSchema.merge(addressSchema)

type CitizenType = z.infer<typeof citizenSchema>

const citizen: CitizenType = {
  name: 'Dan Chanivet',
  email: 'chanivetdan@hotmail.com',
  phone: 1124821510,
  street: '123 Fake St',
  city: 'Springfield',
  state: 'XX',
  postalCode: '12345'
}

const res2 = citizenSchema.parse(citizen)
console.log(res2)
*/
/*
? Podemos asi tener un esquema de productos, de categorias y al momento de recibir una compra
? podemos parsear el objeto que nos envia el cliente y validar que sea correcto
*/

// * ZOD SAFEPARSE
/*
const stringSchema = z.string()
const res = stringSchema.safeParse(30) // ? No acaba con la ejecucion del programa
console.log(res) // ? Devuelve un objeto con un error
*/

// * ZOD ARRAYS

//! El orden de los metodos importa, leer la documentacion
const numbersArraySchema = z.number().optional().array() //! puede ser array compuesto por strings y undefined
const numbersArraySchema2 = z.number().array().optional() //! arreglo todo de strings o undefined
// *Siempre utilizar el tipo de dato para ver que estamos generando
type numbersArrayType = z.infer<typeof numbersArraySchema>
type numbersArrayType2 = z.infer<typeof numbersArraySchema2>

const res = numbersArraySchema.parse([1, 2, 3, 4, 5])
console.log(res)

/*
const userSchema = z.object({
  name: z.string(),
  age: z.number()
})

const usersSchema = z.array(userSchema)
usersSchema.parse([{
  name: 'Dan Chanivet',
  age: 35
}, {
  name: 'Ryan Ray',
  age: '35'
}])
*/
