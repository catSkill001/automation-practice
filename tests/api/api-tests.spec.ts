import { test, expect } from '@playwright/test';

/*
|--------------------------------------------------------------------------
| API TESTING - Request Fixture
|--------------------------------------------------------------------------
| Playwright incluye un fixture 'request' para testing de APIs sin UI.
| 
| Ventajas:
| - Más rápido que tests de UI
| - No requiere browser
| - Útil para testing de backends y microservicios
| - Soporta autenticación, headers, cookies
| 
| Casos de uso:
| - Validar endpoints REST
| - Testing de autenticación
| - Verificar responses y status codes
| - Setup/teardown de datos de prueba
| 
| Documentación: https://playwright.dev/docs/api-testing
|--------------------------------------------------------------------------
*/

test.describe('API Testing with Request Fixture', () => {
  
  /*
  |--------------------------------------------------------------------------
  | TC-024: GET Request - Obtener datos
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo hacer una petición GET y validar la response
  | 
  | API usada:
  |   JSONPlaceholder - API pública de testing
  | 
  | Pasos:
  |   1. Hacer GET request a /posts/1
  |   2. Validar status code 200
  |   3. Validar estructura de la response
  |   4. Validar datos específicos
  | 
  | Resultado esperado:
  |   - Status 200
  |   - Response contiene userId, id, title, body
  |   - Los datos coinciden con el post #1
  | 
  | Conceptos clave:
  |   - request.get(): Hace petición GET
  |   - response.ok(): Valida status 200-299
  |   - response.json(): Parse response como JSON
  |   - expect().toHaveProperty(): Valida propiedades del objeto
  |--------------------------------------------------------------------------
  */
  test('GET request - fetch single post', async ({ request }) => {
    // Hacer GET request a la API de JSONPlaceholder
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
    
    // Validar que el status code es 200 (OK)
    expect(response.ok()).toBeTruthy();
    expect(response.status()).toBe(200);
    
    // Parsear la response como JSON
    const post = await response.json();
    
    // Validar estructura del objeto
    expect(post).toHaveProperty('userId');
    expect(post).toHaveProperty('id');
    expect(post).toHaveProperty('title');
    expect(post).toHaveProperty('body');
    
    // Validar valores específicos
    expect(post.id).toBe(1);
    expect(post.userId).toBe(1);
    expect(typeof post.title).toBe('string');
    expect(post.title.length).toBeGreaterThan(0);
  });

  /*
  |--------------------------------------------------------------------------
  | TC-025: POST Request - Crear recurso
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo hacer una petición POST con body
  | 
  | Pasos:
  |   1. Preparar datos para crear un nuevo post
  |   2. Hacer POST request con el body
  |   3. Validar status code 201 (Created)
  |   4. Validar que la response contiene los datos enviados
  | 
  | Resultado esperado:
  |   - Status 201
  |   - Response incluye los datos enviados
  |   - Response incluye ID generado
  | 
  | Conceptos clave:
  |   - request.post(): Hace petición POST
  |   - data: Object con el body de la petición
  |   - Status 201: Indica que se creó el recurso
  |   - La API retorna el objeto creado con ID
  |--------------------------------------------------------------------------
  */
  test('POST request - create new post', async ({ request }) => {
    // Preparar los datos para el nuevo post
    const newPost = {
      title: 'Playwright API Testing',
      body: 'Testing POST requests with Playwright request fixture',
      userId: 1
    };
    
    // Hacer POST request con los datos
    const response = await request.post('https://jsonplaceholder.typicode.com/posts', {
      data: newPost
    });
    
    // Validar status 201 (Created)
    expect(response.status()).toBe(201);
    
    // Parsear la response
    const createdPost = await response.json();
    
    // Validar que la response contiene los datos enviados
    expect(createdPost.title).toBe(newPost.title);
    expect(createdPost.body).toBe(newPost.body);
    expect(createdPost.userId).toBe(newPost.userId);
    
    // Validar que se generó un ID
    expect(createdPost).toHaveProperty('id');
    expect(typeof createdPost.id).toBe('number');
  });

  /*
  |--------------------------------------------------------------------------
  | TC-026: GET Request - Validar lista de recursos
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Validar que una lista de recursos contiene datos válidos
  | 
  | Pasos:
  |   1. Hacer GET request a /users
  |   2. Validar que es un array
  |   3. Validar que tiene elementos
  |   4. Validar estructura de cada usuario
  | 
  | Resultado esperado:
  |   - Response es un array
  |   - Contiene al menos 1 usuario
  |   - Cada usuario tiene propiedades requeridas
  | 
  | Conceptos clave:
  |   - Array.isArray(): Verifica que es array
  |   - forEach(): Itera sobre los elementos
  |   - Validación de estructura en colecciones
  |--------------------------------------------------------------------------
  */
  test('GET request - fetch users list', async ({ request }) => {
    // Hacer GET request para obtener lista de usuarios
    const response = await request.get('https://jsonplaceholder.typicode.com/users');
    
    // Validar status 200
    expect(response.ok()).toBeTruthy();
    
    // Parsear como array
    const users = await response.json();
    
    // Validar que es un array
    expect(Array.isArray(users)).toBeTruthy();
    
    // Validar que tiene elementos
    expect(users.length).toBeGreaterThan(0);
    
    // Validar estructura del primer usuario
    const firstUser = users[0];
    expect(firstUser).toHaveProperty('id');
    expect(firstUser).toHaveProperty('name');
    expect(firstUser).toHaveProperty('email');
    expect(firstUser).toHaveProperty('address');
    
    // Validar que el email tiene formato válido
    expect(firstUser.email).toContain('@');
  });

  /*
  |--------------------------------------------------------------------------
  | TC-027: Headers y Content-Type
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo enviar y validar headers HTTP
  | 
  | Pasos:
  |   1. Hacer request con headers personalizados
  |   2. Validar Content-Type de la response
  |   3. Validar que la response es JSON válido
  | 
  | Resultado esperado:
  |   - Headers se envían correctamente
  |   - Response tiene Content-Type: application/json
  |   - Los datos son JSON válido
  | 
  | Conceptos clave:
  |   - headers: Object con headers HTTP
  |   - response.headers(): Obtiene headers de la response
  |   - Content-Type: Indica el formato de los datos
  |--------------------------------------------------------------------------
  */
  test('Request with custom headers', async ({ request }) => {
    // Hacer request con headers personalizados
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/1', {
      headers: {
        'Accept': 'application/json',
        'User-Agent': 'Playwright-Test'
      }
    });
    
    // Validar status
    expect(response.ok()).toBeTruthy();
    
    // Validar Content-Type de la response
    const contentType = response.headers()['content-type'];
    expect(contentType).toContain('application/json');
    
    // Validar que la response es JSON válido
    const data = await response.json();
    expect(data).toBeDefined();
    expect(typeof data).toBe('object');
  });

  /*
  |--------------------------------------------------------------------------
  | TC-028: Error Handling - 404 Not Found
  |--------------------------------------------------------------------------
  | Objetivo:
  |   Demostrar cómo manejar errores HTTP
  | 
  | Pasos:
  |   1. Hacer request a un endpoint inexistente
  |   2. Validar status code 404
  |   3. Validar que ok() retorna false
  | 
  | Resultado esperado:
  |   - Status 404
  |   - response.ok() es false
  |   - El test no falla (manejamos el error)
  | 
  | Conceptos clave:
  |   - Status 404: Recurso no encontrado
  |   - response.ok(): false para status >= 400
  |   - Error handling en API tests
  |--------------------------------------------------------------------------
  */
  test('Handle 404 error', async ({ request }) => {
    // Intentar obtener un post que no existe
    const response = await request.get('https://jsonplaceholder.typicode.com/posts/999999');
    
    // Validar que el status es 404
    expect(response.status()).toBe(404);
    
    // Validar que ok() retorna false
    expect(response.ok()).toBeFalsy();
  });
});
