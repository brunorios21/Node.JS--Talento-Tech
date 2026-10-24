# API del Curso

Esta es una API simple para gestionar productos. Proporciona endpoints para obtener la lista de productos y detalles de cada producto.

## pnpm

Agregamos pnpm por un tema de vulnerabilidades y para mejorar la gestión de dependencias.

## Endpoints

- `GET /api/productos`: Obtiene la lista de todos los productos.
- `GET /api/productos/:id`: Obtiene los detalles de un producto específico por su ID.
- `POST /api/productos`: Crea un nuevo producto.
- `PUT /api/productos/:id`: Actualiza un producto existente por su ID.
- `DELETE /api/productos/:id`: Elimina un producto existente por su ID.

## Ejemplo de respuesta

```json
[
  { "id": 1, "nombre": "Producto 1", "precio": 100 },
  { "id": 2, "nombre": "Producto 2", "precio": 200 }
]
```

## CRUD

| CRUD   | Uso Habitual | Método HTTP habitual |
| ------ | ------------ | -------------------- |
| Create | Crear        | POST                 |
| Read   | Leer         | GET                  |
| Update | Actualizar   | PUT / PATCH          |
| Delete | Eliminar     | DELETE               |

## Contrato de productos

| Necesidad              | Método | Endpoint         | Respuesta esperada                | Estado principal esperado |
| ---------------------- | ------ | ---------------- | --------------------------------- | ------------------------- |
| Listar Productos       | GET    | /api/productos   | Array Productos en JSON           | 200                       |
| Obtener un producto    | GET    | /api/productos/1 | Objeto Producto en JSON           | 200                       |
| Crear un producto      | POST   | /api/productos   | Un objeto Producto en JSON con ID | 201                       |
| Actualizar un producto | PUT    | /api/productos/1 | Un objeto Producto en JSON        | 200                       |
| Eliminar un producto   | DELETE | /api/productos/1 | Confirmación o sin contenido      | 200 o 204                 |

/api/productos/{id}
