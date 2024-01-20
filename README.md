# ZOD Official Documentation website 
[https://zod.dev/](TypeScript-first schema validation with static type inference)

# Zod paradigma
No validar el codigo hay que parsearlo.

# router folder
Aqui colocamos las url de la api que el ciente puede visitar
/login, /product, etc.

# controller folder
Son las funciones que van a ser ejecutadas cuando una determinada url sea visitada. Antes de acceder a la url se ejecutara la funcion del controller.

# models folder
Modelos para la base de datos

# schemas folder
Aqui podremos guardar nuestras validaciones de datos

# middlewares folder
Concepto de middleware (proviene de Express): Es una funcion que se ejecuta antes de que se ejecute la funcion del controller. El orden de ejecucion es Middleware, Fc. controller, acceso a la url de la API.