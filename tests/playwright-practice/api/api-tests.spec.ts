import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| API TESTING CON PLAYWRIGHT
|--------------------------------------------------------------------------
| Playwright incluye un fixture 'request' que permite hacer llamadas HTTP
| sin necesidad de abrir un browser. Esto es útil para:
| - Validar endpoints REST/GraphQL
| - Preparar datos antes de tests de UI
| - Limpiar datos después de tests
| - Tests de integración más rápidos
| 
| Métodos disponibles:
| - request.get(url, options): GET request
| - request.post(url, options): POST request
| - request.put(url, options): PUT request
| - request.delete(url, options): DELETE request
| - request.patch(url, options): PATCH request
| 
| Documentación: https://playwright.dev/docs/api-testing
|--------------------------------------------------------------------------
*/

test.describe('API Testing', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-024: GET request - Obtener un usuario individual
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que se puede obtener información de un usuario específico
  | 
  | API utilizada:
  |   JSONPlaceholder (https://jsonplaceholder.typicode.com)
  |   - API pública gratuita para testing
  |   - No requiere autenticación
  | 
  | Pasos:
  |   1. Hacer GET request a /users/1
  |   2. Validar que el status code es 200
  |   3. Validar que el response contiene id, name, email, username
  |   4. Validar que el id es 1
  |   5. Validar la estructura del objeto address
  | 
  | Resultado esperado:
  |   - Status 200 OK
  |   - Response con todas las propiedades del usuario
  |   - Estructura correcta del objeto address con street, city, zipcode
  | 
  | Conceptos clave:
  |   - request.get(): Realiza petición GET
  |   - response.ok(): Verifica status 2xx
  |   - response.json(): Parsea el body como JSON
  |   - toHaveProperty(): Valida existencia de propiedades
  |--------------------------------------------------------------------------
  */
  test('TC-024: GET request to retrieve a single user', async ({ request }) => {
    // TODO: Paso 1 - Hacer GET request a JSONPlaceholder
    // Usa request.get() con la URL 'https://jsonplaceholder.typicode.com/users/1'
    // Guarda el resultado en una variable llamada response
    // Sintaxis: const response = await request.get('url-aqui');
    
    
    // TODO: Paso 2 - Validar que el status code es exitoso (2xx)
    // Usa expect(response.ok()).toBeTruthy();
    // El método ok() retorna true si el status está entre 200-299
    
    
    // TODO: Paso 3 - Parsear el body del response como JSON
    // Usa response.json() y guarda el resultado en una variable llamada user
    // Sintaxis: const user = await response.json();
    
    
    // TODO: Paso 4 - Validar propiedades principales del usuario
    // Valida que user tenga las siguientes propiedades con sus valores:
    // - id: 1
    // - name: (cualquier string)
    // - email: (cualquier string)
    // - username: (cualquier string)
    // Sintaxis: expect(user).toHaveProperty('propiedad', valor);
    
    
    // TODO: Paso 5 - Validar la estructura del objeto address
    // Valida que user.address contenga:
    // - street
    // - city
    // - zipcode
    // Sintaxis: expect(user.address).toHaveProperty('propiedad');
    
    
    // TODO: BONUS - Imprime el usuario completo en consola
    // Usa console.log('User:', user);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-025: POST request - Crear un nuevo recurso
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo enviar datos mediante POST request
  | 
  | Pasos:
  |   1. Crear objeto con datos del nuevo recurso (title, body, userId)
  |   2. Hacer POST request a /posts con el objeto
  |   3. Validar status 201 Created
  |   4. Validar que el response contiene un id generado
  |   5. Validar que los datos enviados coinciden con los retornados
  | 
  | Resultado esperado:
  |   - Status 201 Created
  |   - Response con id autogenerado
  |   - Datos del post coinciden con los enviados
  | 
  | Conceptos clave:
  |   - request.post(): Envía datos al servidor
  |   - data option: Objeto JavaScript que se serializa a JSON automáticamente
  |   - response.status(): Obtiene el código de status HTTP
  |--------------------------------------------------------------------------
  */
  test('TC-025: POST request to create a new resource', async ({ request }) => {
    // TODO: Paso 1 - Crear objeto con los datos del nuevo post
    // Crea un objeto llamado newPost con:
    // - title: 'Test Post from Playwright'
    // - body: 'This is a test post created via API'
    // - userId: 1
    // Sintaxis: const newPost = { title: 'valor', body: 'valor', userId: numero };
    
    
    // TODO: Paso 2 - Enviar POST request
    // Usa request.post() con:
    // - URL: 'https://jsonplaceholder.typicode.com/posts'
    // - Option data: newPost
    // Guarda el resultado en response
    // Sintaxis: const response = await request.post('url', { data: objeto });
    
    
    // TODO: Paso 3 - Validar que el status es 201 (Created)
    // Usa expect(response.status()).toBe(201);
    // 201 indica que el recurso fue creado exitosamente
    
    
    // TODO: Paso 4 - Parsear el response
    // Guarda el JSON parseado en una variable llamada createdPost
    // Sintaxis: const createdPost = await response.json();
    
    
    // TODO: Paso 5 - Validar que se generó un ID
    // Valida que createdPost tenga la propiedad 'id'
    // JSONPlaceholder retorna id: 101 para posts nuevos
    // Sintaxis: expect(createdPost).toHaveProperty('id');
    
    
    // TODO: Paso 6 - Validar que los datos enviados coinciden
    // Compara title, body y userId del createdPost con newPost
    // Sintaxis: expect(createdPost.title).toBe(newPost.title);
    
    
    // TODO: BONUS - Imprime el post creado
    // console.log('Created Post:', createdPost);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-026: Validación de arrays - Filtrar datos de una colección
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Trabajar con endpoints que retornan arrays y aplicar filtros
  | 
  | Pasos:
  |   1. Hacer GET request a /users (retorna array de 10 usuarios)
  |   2. Validar que el response es un array
  |   3. Validar que el array tiene exactamente 10 elementos
  |   4. Filtrar usuarios cuyo email termina en '.biz'
  |   5. Validar que hay al menos 1 usuario con dominio .biz
  | 
  | Resultado esperado:
  |   - Array con 10 usuarios
  |   - Cada usuario tiene estructura completa
  |   - Al menos un email termina en '.biz'
  | 
  | Conceptos clave:
  |   - Array.isArray(): Valida si es un array
  |   - toHaveLength(): Valida cantidad de elementos
  |   - filter(): Filtra elementos de un array
  |   - toBeGreaterThan(): Compara números
  |--------------------------------------------------------------------------
  */
  test('TC-026: Validate array response and filter data', async ({ request }) => {
    // TODO: Paso 1 - Obtener todos los usuarios
    // Haz GET request a 'https://jsonplaceholder.typicode.com/users'
    // Guarda en response
    
    
    // TODO: Paso 2 - Parsear como JSON
    // Guarda el array en una variable llamada users
    // Sintaxis: const users = await response.json();
    
    
    // TODO: Paso 3 - Validar que es un array
    // Usa expect(Array.isArray(users)).toBeTruthy();
    // Array.isArray() retorna true si el valor es un array
    
    
    // TODO: Paso 4 - Validar que tiene 10 elementos
    // Usa expect(users).toHaveLength(10);
    // JSONPlaceholder retorna exactamente 10 usuarios
    
    
    // TODO: Paso 5 - Filtrar usuarios con dominio .biz
    // Usa users.filter() para encontrar emails que terminan en '.biz'
    // Guarda el resultado en bizUsers
    // Sintaxis: const bizUsers = users.filter(user => user.email.endsWith('.biz'));
    
    
    // TODO: Paso 6 - Validar que hay al menos 1 usuario .biz
    // Usa expect(bizUsers.length).toBeGreaterThan(0);
    // toBeGreaterThan(0) valida que hay al menos 1 elemento
    
    
    // TODO: BONUS - Imprime los usuarios con dominio .biz
    // console.log('Users with .biz domain:', bizUsers);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-027: Headers personalizados - Enviar metadata adicional
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo incluir headers personalizados en requests
  | 
  | Headers comunes:
  |   - Authorization: Bearer token para autenticación
  |   - Content-Type: Tipo de contenido enviado
  |   - Accept: Tipo de contenido esperado en respuesta
  |   - Custom headers: Cualquier header personalizado
  | 
  | Pasos:
  |   1. Hacer GET request con headers personalizados
  |   2. Validar que el request fue exitoso
  |   3. Validar que el response contiene los datos esperados
  | 
  | Resultado esperado:
  |   - Request exitoso con headers adicionales
  |   - Response válido con datos de usuario
  | 
  | Conceptos clave:
  |   - headers option: Objeto con headers key-value
  |   - Los headers se envían en cada request
  |   - JSONPlaceholder no requiere auth, pero acepta headers
  |--------------------------------------------------------------------------
  */
  test('TC-027: Send custom headers in request', async ({ request }) => {
    // TODO: Paso 1 - Hacer request con headers personalizados
    // Usa request.get() con:
    // - URL: 'https://jsonplaceholder.typicode.com/users/1'
    // - Option headers: { 
    //     'Custom-Header': 'Playwright-Test',
    //     'Accept': 'application/json'
    //   }
    // Sintaxis: const response = await request.get('url', { headers: { ... } });
    
    
    // TODO: Paso 2 - Validar que fue exitoso
    // Usa expect(response.ok()).toBeTruthy();
    
    
    // TODO: Paso 3 - Parsear el response
    // Guarda en variable user
    
    
    // TODO: Paso 4 - Validar datos básicos
    // Valida que user tiene propiedad 'id' con valor 1
    
    
    // TODO: NOTA - Headers en el response
    // Puedes acceder a los headers del response con:
    // const contentType = response.headers()['content-type'];
    // console.log('Response Content-Type:', contentType);
    
  });

  /*
  |--------------------------------------------------------------------------
  | TC-028: Manejo de errores - Validar status 404
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que la API maneja correctamente recursos inexistentes
  | 
  | Pasos:
  |   1. Intentar obtener un usuario que no existe (id: 999)
  |   2. Validar que el status code es 404
  |   3. Validar que response.ok() es false
  |   4. Parsear el error response
  | 
  | Resultado esperado:
  |   - Status 404 Not Found
  |   - response.ok() retorna false
  |   - Body vacío o con mensaje de error
  | 
  | Conceptos clave:
  |   - Status codes: 404 = Not Found, 400 = Bad Request, 500 = Server Error
  |   - response.ok() es false para códigos fuera del rango 200-299
  |   - toBeFalsy(): Valida valores falsy (false, 0, null, undefined)
  |--------------------------------------------------------------------------
  */
  test('TC-028: Handle 404 error when resource does not exist', async ({ request }) => {
    // TODO: Paso 1 - Intentar obtener usuario inexistente
    // Haz GET request a 'https://jsonplaceholder.typicode.com/users/999'
    // JSONPlaceholder retorna 404 para IDs que no existen
    // Guarda en response
    
    
    // TODO: Paso 2 - Validar que el status es 404
    // Usa expect(response.status()).toBe(404);
    // 404 = Not Found
    
    
    // TODO: Paso 3 - Validar que response.ok() es false
    // Usa expect(response.ok()).toBeFalsy();
    // ok() es false para status fuera de 200-299
    
    
    // TODO: Paso 4 - Parsear el response de error
    // JSONPlaceholder retorna objeto vacío {} para 404
    // const errorBody = await response.json();
    
    
    // TODO: Paso 5 - Validar que el body está vacío
    // Usa expect(Object.keys(errorBody)).toHaveLength(0);
    // Object.keys({}) retorna array vacío []
    
    
    // TODO: BONUS - Prueba otros status codes
    // Intenta:
    // - POST sin body requerido (puede dar 400/422)
    // - PUT/DELETE a recursos protegidos
    
  });

});
